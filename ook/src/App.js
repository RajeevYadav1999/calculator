import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MechcinalInterface from './ook/mechanical/MechcinalInterface';
import { Link } from 'react-router-dom';
import Cad from './ook/mechanical/cad/CadInfo.js'
import Dimension from './ook/mechanical/cad/cad-info/Dimension.js'
import Constraints from './ook/mechanical/cad/cad-info/Constraints.js'
import ConstraintsTypes from './ook/mechanical/cad/cad-info/ConstraintsTypes.js'
import Views from './ook/mechanical/cad/cad-info/Views.js'
import AnnotationsTypes from './ook/mechanical/cad/cad-info/Dimension.js'
import Annotations from './ook/mechanical/cad/cad-info/Dimension.js'
import Viewsslider from './ook/mechanical/cad/cad-info/VIEWS-slider.js'
import AssemblyTopDown from './ook/mechanical/cad/cad-info/Assemblytop-down.js'
import AssemblyBottomDown from './ook/mechanical/cad/cad-info/Assemblybottom-down.js'
import Drawing from './ook/mechanical/cad/cad-info/Dimension.js'
import LFT from './ook/mechanical/cad/cad-info/Dimension.js'
import WS from './ook/mechanical/cad/cad-info/Dimension.js'
import SF from './ook/mechanical/cad/cad-info/Dimension.js'
import WIREFRAME from './ook/mechanical/cad/cad-info/Dimension.js'
import ViewssliderOrthographic from './ook/mechanical/cad/cad-info/Dimension.js'
import ViewssliderSection from './ook/mechanical/cad/cad-info/Dimension.js'
import ViewssliderDetail from './ook/mechanical/cad/cad-info/Dimension.js'
import PartModelling from './ook/mechanical/cad/cad-info/Dimension.js'
import Shape from './ook/mechanical/cad/cad-info/3d Modlling/shape.js'
import EditingTools from './ook/mechanical/cad/cad-info/Dimension.js'
import ReferenceGeometry from './ook/mechanical/cad/cad-info/ReferenceGeometry.js'
import PartModellingtypes from './ook/mechanical/cad/cad-info/3d Modlling/PartModellingtypes.js'
import PartModellingtopicdetail from './ook/mechanical/cad/cad-info/3d Modlling/PartModellingtopicdetail.js'
import Weldments from './ook/mechanical/cad/cad-info/3d Modlling/Weldments.js'
import SheetMetal from './ook/mechanical/cad/cad-info/3d Modlling/sheetMetal.js'
import SurfaceModelling2D from './ook/mechanical/cad/cad-info/3d Modlling/SurfaceModeling(2D).js'
import SktechEditingTools from './ook/mechanical/cad/cad-info/EditingTools.js'
import Cam from './ook/mechanical/cam/Cam';
import Casting from './ook/mechanical/cam/Casting';
import CastingTypes from './ook/mechanical/Manufacturing/types/castingTypes.js';
import Forming from './ook/mechanical/Manufacturing/forming.js'
import FormingSlider from './ook/mechanical/Manufacturing/types/ForminingTypes.js';
import Machining from './ook/mechanical/Manufacturing/machining.js'
import MachiningTypes from './ook/mechanical/Manufacturing/types/machiningTypes.js';
import Joining from './ook/mechanical/Manufacturing/Joining.js'
import JoiningTypes from './ook/mechanical/Manufacturing/types/JoiningTypes.js';
import Finishing from './ook/mechanical/Manufacturing/Finishing.js'
import FinishingTypes from './ook/mechanical/Manufacturing/types/ForminingTypes.js';
import Slider from './ook/mechanical/Manufacturing/types/FormingTypes/Forging.jsx';
import Rolling from './ook/mechanical/Manufacturing/types/FormingTypes/Rolling'
import FormingSheetMetal from './ook/mechanical/Manufacturing/types/FormingTypes/Rolling'
import Extrusion from './ook/mechanical/Manufacturing/types/FormingTypes/Rolling'
import CamWorking from './ook/mechanical/cae/CAE.js'
import StaticAnalyis from './ook/mechanical/cae/pages/StaticAnalyis.js'
import LinearAnalyis from './ook/mechanical/cae/pages/LinearAnalyis.js'
import NonLinearAnalyis from './ook/mechanical/cae/pages/NonLinearAnalyis.js'
import DynamicAnalyis from './ook/mechanical/cae/pages/DynamicAnalyis.js'
import ImplicitAnalyis from './ook/mechanical/cae/pages/ImplicitAnalyis.js'
import ExplicatAnalyis from './ook/mechanical/cae/pages/ExplicatAnalyis.js'
import Assembly from './ook/mechanical/Manufacturing/types/joiningtypes/assembly';
import Welding from './ook/mechanical/Manufacturing/types/joiningtypes/Welding';
import CASTINGPROPERTIESOFMATERIAL from './ook/mechanical/cam/CASTINGPROPERTIESOFMATERIAL.js'
import COMPONENTSUSEDINCASTING from './ook/mechanical/cam/COMPONENTSUSEDINCASTING.js'
import STEPSINVOLVEDINTHECASTINGPROCESS from './ook/mechanical/cam/STEPSINVOLVEDINTHECASTINGPROCESS.js'
import Se from './ook/mechanical/se/se.js';
import SestructuralMembers from './ook/mechanical/se/SEstructural-members.js';
import SeTypesOfStructure from './ook/mechanical/se/SEtypesofstructure.js';
import CalculationAndCalculator from './ook/mechanical/CalculationAndCalculator/CalculationAndCalculator.js';
import AnalysisPrePocessing from './ook/mechanical/se/AnalysisPrePocessing.js';
import AnalysisMeshing from './ook/mechanical/se/AnalysisMeshing.js';
import AnalysisPostPocessing from './ook/mechanical/se/AnalysisPostPocessing.js';
import SestructuralMembersSlider from './ook/mechanical/se/SEstructural-membersSlider.js';
import Calculatortest from './ook/mechanical/CalculationAndCalculator/UnitSelectionProperty/square.js';
import Onepagecalculator from './ook/mechanical/CalculationAndCalculator/onepagecalculator.js';
import Imgconverter from './ook/mechanical/CalculationAndCalculator/imgconverter.js';
import './ook/footerandnavbar.css'
import Cse from './ook/cse/coding interface/interface.js';
import Frontend from './ook/cse/coding interface/frontend/Frontend.js';
import HTML from './ook/cse/coding interface/frontend/HTML.js';
import MainCompilerSlider from './ook/cse/coding interface/slider/main-compiler-slider';
import Singlepage from './ook/mechanical/CalculationAndCalculator/singlepage.js';
import CSS from './ook/cse/coding interface/css/CSS.js'
import PadEyecalculatorPage from './ook/mechanical/CalculationAndCalculator/PadEyecalculatorPage.js';
// import PadEyecalculatorPage2 from './ook/mechanical/CalculationAndCalculator/Ruff folder/PadEyecalculatorPage(all ok).js';
import Navlogo from './ook/mechanical/images/vig (1).png'
import BeamDeflectionCalculator from './ook/mechanical/CalculationAndCalculator/Beam deflection calculator/BeamDeflectionCalculator.js';
import AboutUs from './ook/AboutUs/AboutUs.js';
import './ook/mechanical/new css/MediaQuary.css'
import Ruff from './ook/mechanical/CalculationAndCalculator/Padeyeproperty/ruff.js';
import RuffBeamPropertiesFuntion from './ook/mechanical/CalculationAndCalculator/Ruff folder/ruffBeamPropertiesFuntion.js';
import BeamDeflectionCalculatorTest from './ook/mechanical/CalculationAndCalculator/Beam deflection calculator/BeamDeflectionTest.js';
function App() {
  return (
    <>
      <nav className='ME-navbar'>
        <img classname="MeNavlogo" src={Navlogo} alt=''></img>
      </nav>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Singlepage />} />

          {/* AboutUs */}
          <Route path="/Singlepage" element={<Singlepage />} />
          <Route path="/BeamDeflectionCalculator" element={<BeamDeflectionCalculator />} />
          <Route path="/BeamDeflectionCalculatortest" element={<BeamDeflectionCalculatorTest/>} />
          <Route path="/PadEyecalculatorPage" element={<PadEyecalculatorPage />} />
          {/* <Route path="/PadEyecalculatorPageAllOk" element={<PadEyecalculatorPage2/>} /> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Ruff" element={<Ruff />} />
          <Route path="/RuffBeamPropertiesFuntion" element={<RuffBeamPropertiesFuntion/>} />

          {/* mechacinal  
          <Route path="/Mechcinal" element={<MechcinalInterface />} />
          <Route path="/Mechcinal/Analyis/Pre-processing" element={<AnalysisPrePocessing />} />
          <Route path="/Mechcinal/Analyis/Meshing" element={<AnalysisMeshing />} />
          <Route path="/Mechcinal/Analyis/Post-processing" element={<AnalysisPostPocessing />} />
          <Route path="/Mechcinal/STRUCTURE-ENGINEERING" element={<Se />} />
          <Route path="/Mechcinal/STRUCTURE-ENGINEERING/Types-of-structural-members" element={<SestructuralMembers />} />
          <Route path="/Mechcinal/STRUCTURE-ENGINEERING/Types-of-structural-members/slider" element={<SestructuralMembersSlider />} />
          <Route path="/Mechcinal/STRUCTURE-ENGINEERING/Types-of-structure" element={<SeTypesOfStructure />} />
          <Route path="/Mechcinal/cad" element={<Cad />} />
          <Route path="/Mechcinal/CalculationAndCalculator" element={<CalculationAndCalculator />} />
          <Route path="/Mechcinal/Onepagecalculator" element={<Onepagecalculator />} />
          <Route path="/imgconverter" element={<Imgconverter />} />
          <Route path="/Mechcinal/CalculationAndCalculator/calculatortest" element={<Calculatortest />} />
          <Route path="/Mechcinal/cam/topics" element={<Cam />} />
          <Route path="/Mechcinal/cam/topics/casting" element={<Casting />} />
          <Route path="/Mechcinal/cam/topics/casting/CASTINGPROPERTIESOFMATERIAL" element={<CASTINGPROPERTIESOFMATERIAL />} />
          <Route path="/Mechcinal/cam/topics/casting/COMPONENTSUSEDINCASTING" element={<COMPONENTSUSEDINCASTING />} />
          <Route path="/Mechcinal/cam/topics/casting/STEPSINVOLVEDINTHECASTINGPROCESS" element={<STEPSINVOLVEDINTHECASTINGPROCESS />} />
          <Route path="/Mechcinal/cam/topics/casting/types" element={<CastingTypes />} />
          <Route path="/Mechcinal/cam/topics/forming" element={<Forming />} />
          <Route path="/Mechcinal/cam/topics/forming/types" element={<FormingSlider />} />
          <Route path="/Mechcinal/cam/topics/forming/types/forging" element={<Slider />} />
          <Route path="/Mechcinal/cam/topics/forming/types/rolling" element={<Rolling />} />
          <Route path="/Mechcinal/cam/topics/forming/types/Extrusion" element={<Extrusion />} />
          <Route path="/Mechcinal/cam/topics/forming/types/SheetMetal" element={<FormingSheetMetal />} />
          <Route path="/Mechcinal/cam/topics/machining" element={<Machining />} />
          <Route path="/Mechcinal/cam/topics/machining/types" element={<MachiningTypes />} />
          <Route path="/Mechcinal/cam/topics/joining" element={<Joining />} />
          <Route path="/Mechcinal/cam/topics/joining/types" element={<JoiningTypes />} />
          <Route path="/Mechcinal/cam/topics/Finishing" element={<Finishing />} />
          <Route path="/Mechcinal/cam/topics/Finishing" element={<FinishingTypes />} />
          <Route path="/Mechcinal/cam/working" element={<CamWorking />} />
          <Route path="/Mechcinal/cae2/StaticAnalyis" element={<StaticAnalyis />} />
          <Route path="/Mechcinal/cae2/StaticAnalyis/LinearAnalyis" element={<LinearAnalyis />} />
          <Route path="/Mechcinal/cae2/StaticAnalyis/NonLinearAnalyis" element={<NonLinearAnalyis />} />
          <Route path="/Mechcinal/cae2/DynamicAnalyis" element={<DynamicAnalyis />} />
          <Route path="/Mechcinal/cae2/ImplicitAnalyis" element={<ImplicitAnalyis />} />
          <Route path="/Mechcinal/cae2/ExplicatAnalyis" element={<ExplicatAnalyis />} />


          <Route path="/Mechcinal/cad/sketching/dimension" element={<Dimension />} />
          <Route path="/Mechcinal/cad/sketching/EditingTools" element={<SktechEditingTools />} />
          <Route path="/Mechcinal/cad/sketching/Constraints" element={<Constraints />} />
          <Route path="/Mechcinal/cad/sketch/constraints/types" element={<ConstraintsTypes />} />
          <Route path="/Mechcinal/cad/DRAFTING/VIEWS" element={<Views />} />
          <Route path="/Mechcinal/cad/DRAFTING/Annotations" element={<Annotations />} />
          <Route path="/Mechcinal/cad/DRAFTING/Annotations/types" element={<AnnotationsTypes />} />
          <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types" element={<Viewsslider />} />
          <Route path="/Mechcinal/cad/assembly/top-down" element={<AssemblyTopDown />} />
          <Route path="/Mechcinal/cad/assembly/Bottom-down" element={<AssemblyBottomDown />} />
          <Route path="/Mechcinal/cad/drawing" element={<Drawing />} />
          <Route path="/Mechcinal/cad/drawing/LFT" element={<LFT />} />
          <Route path="/Mechcinal/cad/drawing/LFT/slider" element={<Slider />} />
          <Route path="/Mechcinal/cad/drawing/SF" element={<WS />} />
          <Route path="/Mechcinal/cad/drawing/WS" element={<SF />} />
          <Route path="/Mechcinal/cad/solidworks" element={<Cad />} />
          <Route path="/Mechcinal/cad/topics/WIREFRAME" element={<WIREFRAME />} />

          <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Orthographic" element={<ViewssliderOrthographic />} />
          <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Section" element={<ViewssliderSection />} />
          <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Detail" element={<ViewssliderDetail />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling" element={<PartModelling />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/shape" element={<Shape />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/EditingTools" element={<EditingTools />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/ReferenceGeometry" element={<ReferenceGeometry />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/types" element={<PartModellingtypes />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/types/PartModelling" element={<PartModellingtopicdetail />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/types/Weldments" element={<Weldments />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/types/SheetMetal" element={<SheetMetal />} />
          <Route path="/Mechcinal/cad/3dModeling/partModlling/types/SurfaceModelling" element={<SurfaceModelling2D />} />
          <Route path="/Mechcinal/cad/DRAFTING/VIEWS" element={<Views />} />
          <Route path="/Mechcinal/cad/assembly/top-down" element={<AssemblyTopDown />} />
          <Route path="/Mechcinal/cad/assembly/Bottom-down" element={<AssemblyBottomDown />} />
          <Route path="/Mechcinal/cad/sketching/Constraints" element={<Constraints />} />
          <Route path="/Mechcinal/cad/sketching/dimension" element={<Dimension />} />
          <Route path="/Mechcinal/cam/topics/machining/types/Assembly" element={<Assembly />} />
          <Route path="/Mechcinal/cam/topics/machining/types/Welding" element={<Welding />} />
          {/* <Route path="/Mechcinal/cae" element={<Cae />}/>
                 <Route path="/Mechcinal/cae/calcutareOne" element={<SectionWithDivs/>}/>
                 <Route path="/Mechcinal/cae/calcutareTwo" element={<SectionWithDivsTwo/>}/>
                 <Route path="/Mechcinal/cad/sketch/constraints/types" element={<ConstraintsTypes/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/Annotations" element={<Annotations/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/Annotations/types" element={<AnnotationsTypes/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types" element={<Viewsslider/>}/>
                 <Route path="/Mechcinal/cad/drawing" element={<Drawing/>}/>
                 <Route path="/Mechcinal/cad/drawing/LFT" element={<LFT/>}/>
                 <Route path="/Mechcinal/cad/drawing/LFT/slider" element={<Slider/>}/>
                 <Route path="/Mechcinal/cad/drawing/SF" element={<WS/>}/>
                 <Route path="/Mechcinal/cad/drawing/WS" element={<SF/>}/>
                 <Route path="/Mechcinal/cad/solidworks" element={<Cad/>}/>
                 <Route path="/Mechcinal/cad/topics/WIREFRAME" element={<WIREFRAME/>}/>
                 <Route path="/Mechcinal/cam/Advantanges" element={<Advantages/>}/>
                 <Route path="/Mechcinal/cam/Disadvatanges" element={<Disadvantages/>}/>
                 <Route path="/Mechcinal/cam/tutoiral" element={<Tutorial/>}/>
                 <Route path="/Mechcinal/cam/topics/assembly" element={<Assembly/>}/>
                 <Route path="/Mechcinal/cam/topics/finishing" element={<Finishing/>}/>
                 <Route path="/Mechcinal/cam/topics/fabricatiors" element={<FABRICATIORS/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Orthographic" element={<ViewssliderOrthographic/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Section" element={<ViewssliderSection/>}/>
                 <Route path="/Mechcinal/cad/DRAFTING/VIEWS/types/Detail" element={<ViewssliderDetail/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling" element={<PartModelling/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/shape" element={<Shape/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/EditingTools" element={<EditingTools/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/ReferenceGeometry" element={<ReferenceGeometry/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/types" element={<PartModellingtypes/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/types/PartModelling" element={<PartModellingtopicdetail/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/types/Weldments" element={<Weldments/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/types/SheetMetal" element={<SheetMetal/>}/>
                 <Route path="/Mechcinal/cad/3dModeling/partModlling/types/SurfaceModelling" element={<SurfaceModelling2D/>}/>
                 <Route path="/creo" element={<Creo />}/>
                 <Route path="/sidenav" element={<Sidenav/>}/>
                 <Route path="/Mechcinal/cae2" element={<CAE/>}/> */}






          {/* computer science */}
          <Route path="/Cse" element={<Cse />} />
          <Route path="/Cse/frontend" element={<Frontend />} />
          <Route path="/Cse/frontend/HTML" element={<HTML />} />
          <Route path="/Cse/frontend/CSS" element={<CSS />} />
          <Route path='/cse/html/slider' element={<MainCompilerSlider />} />







          {/* aerospace */}
          {/* <Route path="/aerospace" element={<Ainterface/>}/>
                 <Route path='/aerospace/rocket' element={<Rocket/>}></Route>
                 <Route path='/aerospace/Aircraft' element={<Aircraft/>}></Route>
                 <Route path='/aerospace/Aerodynamics' element={<Aerodynamics/>}></Route>
                 <Route path='/compiler' element={<VideoPlayer/>}/> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
