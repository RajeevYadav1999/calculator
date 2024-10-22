import React from 'react'
import logo from "../../mechanical/images/vig (1).png"
import { GrSearch } from "react-icons/gr";
// import { Link } from 'react-router-dom';
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { ImCross } from "react-icons/im";
import { useState } from 'react'
import { BsDot } from "react-icons/bs";
import { Link } from 'react-scroll';



export default function Html() {
    const [state, setState] = useState(false);

    const Toggle = () => {
        setState(!state);
    }
    const [compiler, setcompiler] = useState(false);

    const Togglecompiler = () => {
        setcompiler(!compiler);
    }
    const [Toggletext, setToggletext] = useState(false);

    const Togglemytext = () => {
        Toggletext ? setToggletext(false) : setToggletext(true);
        console.log(Toggletext);
    }
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value) => {
        setInputValue(value);
    };

    const [compiledHtml, setCompiledHtml] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const compileHtml = () => {
        setCompiledHtml(inputValue);
    };
    return (
        <>
            <nav className='htmlnav'>
                <div className="menu">
                    <ul>
                        <li className="list-item">
                            <Link to="/">
                                <img src={logo} className='bx bxl-apple' alt=''></img>
                            </Link>
                        </li>
                        <li className="list-item">HTML</li>
                        <li className="list-item">CSS</li>
                        <li className="list-item">JavaScript</li>
                        <li className="list-item"><Link to='/python'>Python</Link></li>
                        <li className="list-item">Java</li>
                        <li className="list-item">PHP</li>
                        <li className="" id="search">
                            <GrSearch className='bx bx-search'></GrSearch>
                        </li>
                    </ul>
                    <div className="search-form">
                        <form>
                            <input type="text" name="" placeholder="search ook.com" />
                        </form>
                    </div>
                </div>
            </nav>


            <section className={'section htmlsection ' + (state ? 'hide' : '')}>

                <ul className={'topices ' + (state ? 'hide ' : '') + (compiler ? 'blur ' : '')}>
                    <li className='topic'>HTML Tutorial</li>
                    <li className='list'>
                        <Link to="about" smooth={true} duration={500}>
                            HTML INTROFUCTION
                        </Link>
                    </li>
                    <li className='list'>
                        <Link to="services" smooth={true} duration={500}>
                        	HTML DOCUMENT STRUCTURE 
                        </Link>
                    </li>
                    <li className='list'>
                        <Link to="services" smooth={true} duration={500}>
                        	HTML HEADINGS 
                        </Link>
                    </li>
                    <li className='list'>
                        <Link to="services" smooth={true} duration={500}>
                        	HTML PARAGRAPH  
                        </Link>
                    </li>
                    <li className='list'>HTML Intermediate</li>
                    <li className='list'>HTML Forms</li>
                    <li className='list'>HTML Tables</li>
                    <li className='list'>HTML5 Video and Audio</li>
                    <li className='list'>HTML5 Canvas</li>
                    <li className='list'>HTML5 Geolocation</li>
                    <li className='list'>HTML Forms</li>

                </ul>
                <div className={'burgur ' + (state ? 'htmlburgurleft' : '')} onClick={Toggle}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>

                <div className={'right ' + (state ? 'margin-zero' : '')}>

                    <section className={'htmloverview ' + (compiler ? 'blur ' : '')} id='about'>
                        <br />
                        <br />
                        <h1 className='aligh-center'>Intro</h1><br />
                        <br />
                        <br />
                        <li><span><BsDot /></span>HHTML (Hypertext Markup Language) is used to create and structure web pages is called HTML.HTML is like a web page layout, and we can design our website with the help of CSS (cascading style sheets). Every website on the World Wide Web is supported by it. Developers can efficiently organize and present information using the tags and attributes provided by HTML, which define the structure and content of a web page</li><br />
                        <br />
                        <br />
                        <li><span><BsDot /></span>	HTML uses a series of tags and attributes to define the structure and content of a web page.<br /> These tags and attributes are interpreted by web browsers to display the web page to the user. </li><br />
                        <br />
                        <br />
                        <li><span><BsDot /></span>	HTML is a markup language, not a programming language,<br /> which means it describes the structure of content rather than providing programming logic.</li><br />
                        <br />
                        <br />
                        <li><span><BsDot /></span>	However, HTML can be used in conjunction with other web technologies such as CSS (Cascading Style Sheets) and <br /> JavaScript to create complex and interactive web pages.</li>
                        <br />
                    </section>
                    <br />
                    <br />
                    <br />
                    <section className={'htmlBasicHTMLTags ' + (compiler ? 'blur ' : '')} id='services'>
                        <br />
                        <br />
                        <h1 className='aligh-center'>Basic HTML Tags</h1>
                        <br />
                        <h2 className='aligh-center'>HTML documents are made up of a series of tags.<br /> Here are some of the most common tags you'll encounter in HTML:</h2><br />
                        <br />
                        <h3>Document Structure Tags:</h3><br />
                        <li>•	html: The root element of an HTML document.</li><br />
                        <li>•	head: Contains metadata about the document, including the title and any stylesheets or scripts.</li><br />
                        <li>•	body: Contains the visible content of the document.</li><br /><br />



                        <h3>Text Tags:</h3><br />
                        <li>•	p: Defines a paragraph of text.</li><br />
                        <li>•	h1, h2, h3, h4, h5, h6: Defines headings of different sizes.</li><br />
                        <li>•	strong: Defines text that should be bold.</li><br />
                        <li>•	em: Defines text that should be italicized.</li><br />
                        <li>•	a: Defines a hyperlink to another web page or resource.</li><br /><br />



                        <h3>List Tags:</h3><br />
                        <li>•	ul: Defines an unordered list.</li><br />
                        <li>•	ol: Defines an ordered list.</li><br />
                        <li>•	li: Defines a list item.</li><br /><br />


                        <h3>Image Tags</h3><br />
                        <li>•	img: Defines an image on the page.</li><br /><br />
                    </section>

                    <section className={'htmlattributes ' + (compiler ? 'blur ' : '')}>
                        <h1 className='aligh-center'>HTML Attributes:</h1><br></br>
                        <h3 className='aligh-center'>HTML attributes provide additional information about HTML elements.<br /> Attributes are defined in the opening tag of an HTML element, and consist of a name and a value.<br /> Here are some common HTML attributes:</h3><br />
                        <li>•	class: Specifies one or more CSS classes to apply to an element.</li><br />
                        <li>•	id: Specifies a unique identifier for an element.</li><br />
                        <li>•	href: Specifies the URL of a hyperlink.</li><br />
                        <li>•	src: Specifies the URL of an image.</li><br />
                    </section>

                    <section className='htmlDocumentStructure'>
                        <h1 className={'aligh-center ' + (compiler ? 'blur ' : '')}>HTML Document Structure</h1>
                        <h3 className={'aligh-center ' + (compiler ? 'blur ' : '')}>Here is an example of a basic HTML document:</h3>
                        <button onClick={Togglecompiler} className={(compiler ? 'compiler-btn blur' : 'compiler-btn')}>try it</button>
                        <div className="main-compiler">
                            <div className={(Toggletext ? 'compiler row' : 'compiler ') + (compiler ? '' : 'hide')}>
                                <div className="column">
                                    <ul>
                                        <li><SiHtml5 /></li>
                                        <li><SiCss3 /></li>
                                        <li><SiJavascript /></li>
                                        <li><SiJquery /></li>
                                        <li><FaPython /></li>
                                        <li><SiCplusplus /></li>
                                    </ul>
                                </div>
                                <div className={Toggletext ? 'column input row' : 'column input '}>
                                    <div>
                                        <textarea value={inputValue} onChange={handleInputChange} cols={50} rows={10} />
                                    </div>
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: compiledHtml }} />
                                        <button className="run-btn" onClick={compileHtml}>Run</button>
                                    </div>
                                </div>
                                <footer>
                                </footer>
                            </div>
                        </div>
                        <li onClick={Togglecompiler} className={(compiler ? '' : 'hide ') + 'cross'}><ImCross /></li>
                        <h3 className={(compiler ? 'blur ' : '')}>This HTML document contains three main sections:</h3><br />
                        <h5 className={(compiler ? 'blur ' : '')}>1.	The DOCTYPE html declaration tells the browser that this is an HTML5 document.</h5>
                        <h5 className={(compiler ? 'blur ' : '')}>2.	The html element contains the entire document.</h5>
                        <h5 className={(compiler ? 'blur ' : '')}>3.	The head element contains metadata about the document, including the title.</h5>
                    </section>

                    <br></br>
                    <br></br>
                    <section className={'htmlIntermediateHTML' + (compiler ? 'blur' : '')}>
                        <h1 className='aligh-center'>Intermediate HTML</h1><br />
                        <h1 className='htmlbitright aligh-center'>Semantic HTML</h1><br />
                        <h3>Semantic HTML is a way of writing HTML that reflects the meaning of the content on the page.<br /> This helps search engines understand the content of your page, and can also make your HTML easier to read and maintain.<br /> Here are some examples of semantic HTML elements:</h3><br />
                        <li>•	header: Defines a header section for the page.</li><br />
                        <li>•	nav: Defines a navigation section for the page.</li><br />
                        <li>•	main: Defines the main content section of the page.</li><br />
                        <li>•	article: Defines an article or blog post.</li><br />
                        <li>•	section: Defines a section of the page.</li><br />
                        <li>•	aside: Defines a sidebar or other auxiliary content.</li><br />
                        <li>•	footer: Defines a footer section for the page.</li><br /><br />
                    </section>
                </div>
            </section>
        </>
    )
}