
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import io
import base64
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from indeterminatebeam import Beam, Support, PointLoadV, DistributedLoadV
import json
app = Flask(__name__)
CORS(app)

# Function to generate a base64 encoded plot
def generate_plot_base64():
    # Example plot (your actual plot will be based on the beam analysis)
    plt.figure(figsize=(6, 4))
    plt.plot([0, 1, 2], [0, 1, 0], label='Sample Plot')
    plt.xlabel('X axis')
    plt.ylabel('Y axis')
    plt.legend()

    # Create an in-memory buffer
    buffer = io.BytesIO()

    # Save the plot to the buffer
    plt.savefig(buffer, format='png')

    # Rewind the buffer to the beginning so it can be read
    buffer.seek(0)

    # Encode the buffer in base64
    img_base64 = base64.b64encode(buffer.getvalue()).decode('utf8')

    # Close the buffer
    buffer.close()

    # Return the base64 string with the proper data URI format
    return f"data:image/png;base64,{img_base64}"

@app.route('/api/process', methods=['GET', 'POST'])
def process_data():
    # Get the data sent from React (assuming it's a JSON object)
    length = request.json.get('length')
    point_loads = request.json.get('point_loads', [])
    distributed_loads = request.json.get('distributed_loads', [])
    supports = request.json.get('supports')
    youngmodules = request.json.get('youngmodules')
    area = request.json.get('area')
    inertia = request.json.get('inertia')

    # Initialize the beam with given properties
    beam = Beam(length, A=area, I=inertia, E=youngmodules)


    # Add supports to the beam
    for support in supports:
        position = support['position']
        support_type = support['type']
        if support_type == 'pin':
            constraints = (1, 1, 1)
        elif support_type == 'roller':
            constraints = (0, 1, 1)
        elif support_type == 'fixed':
            constraints = (1, 1, 1)
        beam.add_supports(Support(position, constraints))
    # has_x_restraint = False
    # for support in supports:
    #  position = support['position']
    # if support['type'] == 'pinned':
    #     constraints = [1, 1, 0]  # Assuming pinned supports restrict horizontal and vertical movement
    #     has_x_restraint = True
    # elif support['type'] == 'roller':
    #     constraints = [0, 1, 0]  # Assuming roller supports allow horizontal movement but restrict vertical
    # elif support['type'] == 'fixed':
    #     constraints = [1, 1, 1]  # Fixed support restricts all movement and rotation
    #     has_x_restraint = True
    # else:
    #     raise ValueError(f"Unsupported support type: {support['type']}")
    
    # Now you can safely add the supports with assigned constraints
    # beam.add_supports(Support(position, constraints))

    # Add vertical point loads to the beam
    for pl in point_loads:
        beam.add_loads(PointLoadV(pl['magnitude'], pl['position']))

    # Add distributed loads to the beam
    # for dl in distributed_loads:
    #     beam.add_loads(DistributedLoadV(dl['magnitude'], (dl['start_position'], dl['end_position'])))

     # Add distributed loads to the beam
        for dl in distributed_loads:
            start_position = dl.get('start_position')
            end_position = dl.get('end_position')
            magnitude = dl.get('magnitude')
            # Validate the values
    if start_position is None or end_position is None or magnitude is None:
        return jsonify({'error': 'Distributed load data is missing or invalid'}), 400

    try:
        # Convert to float to ensure they are valid numbers
        start_position = float(start_position)
        end_position = float(end_position)
        magnitude = float(magnitude)
        
        # Add the load to the beam
        beam.add_loads(DistributedLoadV(magnitude, (start_position, end_position)))
    except ValueError:
        return jsonify({'error': 'Invalid value for distributed load parameters'}), 400
    beam.analyse()

    # Define positions along the beam and calculate deflection, shear force, and bending moment
    positions = np.linspace(0, length, 100)
    deflections = [beam.get_deflection(x) for x in positions]
    shear_forces = [beam.get_shear_force(x) for x in positions]
    bending_moments = [beam.get_bending_moment(x) for x in positions]

    # Get reaction forces
    reaction_forces = []
    for support in supports:
        position = support['position']
        reactions = beam.get_reaction(position)  # Get reactions at support position

        if reactions is not None:  # Ensure there are reactions
            reaction_forces.append({
                'position': round(float(position), 2),
                'reactions': {
                    'x': reactions[0],  # Reaction in x-direction
                    'y': reactions[1],  # Reaction in y-direction
                    'm': reactions[2]   # Moment reaction
                }
            })

    

    # Ensure beam.plot_beam_external() returns valid data
    external_forces_raw = beam.plot_beam_external()  # This must return data
    # print("External forces raw:", external_forces_raw)
    try:
    # If it's a JSON string, parse it
     if isinstance(external_forces_raw, str):
        external_forces_raw = json.loads(external_forces_raw)  # Attempt to parse JSON if it's a string

    # Check if external_forces_raw is now a list
     if isinstance(external_forces_raw, list):
        # Create a list of external forces with 'position' and 'force'
        external_forces = [{"position": force.get('position'), "force": force.get('force')} for force in external_forces_raw]
     else:
        external_forces = []  # If it's not a list, default to empty list
    except (json.JSONDecodeError, TypeError, ValueError) as e:
     print("Error parsing external forces:", str(e))
     external_forces = []  # Handle case where parsing fails

     # Convert the plot to a base64 string
    plot_base64 = generate_plot_base64()

    # Combine positions, deflections, shear forces, and bending moments into result lists
    result = {
        'deflection_data': [{'position': round(float(pos), 2), 'deflection': round(float(deflection), 6)} for pos, deflection in zip(positions, deflections)],
        'shear_force_data': [{'position': round(float(pos), 2), 'shear_force': round(float(shear_force), 2)} for pos, shear_force in zip(positions, shear_forces)],
        'bending_moment_data': [{'position': round(float(pos), 2), 'bending_moment': round(float(bending_moment), 2)} for pos, bending_moment in zip(positions, bending_moments)],
        'reaction_force': reaction_forces,
        'applied_external_forces': external_forces , #external forces data
        'plot_image': plot_base64
    }
    print("Reaction Forces:", reaction_forces)
    # fig_1 = beam.plot_beam_external()
    # fig_1.show()

    # fig_2 = beam.plot_beam_internal()
    # fig_2.show()

    # Plot deflection, shear force, and bending moment graphs (optional, for backend verification)
    plt.figure(figsize=(12, 8))

    plt.subplot(3, 1, 1)
    plt.plot(positions, deflections, label='Deflection')
    plt.xlabel('Position (mm)')
    plt.ylabel('Deflection (mm)')
    plt.grid(True)

    plt.subplot(3, 1, 2)
    plt.plot(positions, shear_forces, label='Shear Force', color='red')
    plt.xlabel('Position (mm)')
    plt.ylabel('Shear Force (N)')
    plt.grid(True)

    plt.subplot(3, 1, 3)
    plt.plot(positions, bending_moments, label='Bending Moment', color='blue')
    plt.xlabel('Position (mm)')
    plt.ylabel('Bending Moment (Nm)')
    plt.grid(True)

    plt.tight_layout()
    # plt.savefig('beam_analysis_plots.png')

    #  # Convert the plot to a PNG image in memory and encode it as a base64 string
    # img = io.BytesIO()
    # plt.savefig(img, format='png')
    # img.seek(0)
    # plot_url = base64.b64encode(img.getvalue()).decode('utf8')

    # # Include the base64 image in the JSON result
    # result['plot_image'] = f"data:image/png;base64,{plot_url}"

    # Return the result as JSON
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
