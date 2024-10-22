import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import HtmlBackgroundsixth from '../videos/html background sixth.mp4'
import HtmlNavBackground from '../images/photoshop files of cse images/htmlnavbar.jpg'
import Google from '../images/google.webp'
import Bing from '../images/bing.webp'
import Yahoo from '../images/yahoo.webp'
import { Link } from 'react-scroll';
import { RxCross2 } from "react-icons/rx";
import { GrLinkTop } from "react-icons/gr";
import HtmlHomeLink from './html\'sHomeLink';
import Animation from './scrollAnimation.js'
import Animatedimg1 from '../images/photoshop files of cse images/animatedimgforhtml.jpeg'
export default function HTML() {

    const [Toggle, setToggle] = useState(false)

    const ToggleClass = () => {
        Toggle ? setToggle(false) : setToggle(true);
    }
    const [Toggletext, setToggletext] = useState(true);

    const Togglemytext = () => {
        setToggletext(!Toggletext);
    }
    
    return (
        <>
            <section className={Toggletext ? 'cse-promo-primary' : 'cse-promo-primary blur'} id='cse-HTML-header'>
                <div className="cse-overlay" />
                <picture>
                    <video autoPlay muted loop id="background-video">
                        <source src={HtmlBackgroundsixth} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <img className="cse-jarallax-img img-bg" src={Html} alt="img" /> */}
                    {/* <video src={HtmlBackgroundOne} alt='' autoPlay={true} loop={true} /> */}
                    {/* <video src={HtmlBackgroundTwo} alt='' autoPlay={true} loop={true} /> */}
                    {/* <video src={HtmlBackgroundThree} alt='' autoPlay={true} loop={true} /> */}
                    {/* <video src={HtmlBackgroundfour} alt='' autoPlay={true} loop={true} /> */}
                    {/* <video src={HtmlBackgroundfifth} alt='' autoPlay={true} loop={true} /> */}
                    {/* <video src={HtmlBackgroundsixth} alt='' autoPlay={true} loop={true} /> */}
                </picture>
                <div className="cse-container">
                    <div className="cse-row">
                        <div className="cse-col-12">
                            <div className="cse-align-container">
                                <div className="cse-align-item">
                                    <h1 className="cse-title">HTML</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='cse-burgur' onClick={ToggleClass}>
                <div className='cse-burgur-line'></div>
                <div className='cse-burgur-line'></div>
                <div className='cse-burgur-line'></div>
            </div>
            <section className={Toggle ? "cse cse-navbar open" : "cse cse-navbar "}>
                <div className='cse-left-side-navbar'>
                    <div className='cse-left-side-navbar-left-part'>
                        <HtmlHomeLink />
                        <RxCross2 className='closs-nav-btn' onClick={ToggleClass} />
                    </div>
                    <div className='cse-left-side-navbar-right-part'>
                        <br />
                        <br />
                        <br />
                        <h1>HTML</h1>
                        <hr></hr>
                        <ul>
                            <li className='cse-nav-list'>
                                <Link to="Intro-of-html" smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Introduction
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Document Structure
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Headings
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Paragraph
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Hyperlinks
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML File Links
                                </Link>
                            </li>
                            <li className='cse-nav-list'>
                                <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                    HTML Styles
                                </Link>
                            </li>
                            <li className='cse-nav-list'>HTML5 Video and Audio</li>
                            <li className='cse-nav-list'>HTML5 Canvas</li>
                            <li className='cse-nav-list'>HTML5 Geolocation</li>
                            <li className='cse-nav-list'>HTML Forms</li>
                        </ul>
                    </div>
                </div>
                <div className='cse-nav-right-div-img'>
                    <img src={HtmlNavBackground} alt=''></img>
                </div>
            </section>
            {/* <video autoPlay muted loop src={HtmlBackground}></video> */}
            <section className={Toggletext ? ' transform-160px-top cse-HTML-intro' : ' transform-160px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Animation />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML INTRODUCTION</h1>
                        <br />
                        <p className='black-white  description'>HTML, also known as Hypertext Markup Language. Used to create web pages by using some elements like hyperlinks, video, images, headings, and some other elements. HTML uses a specific DOCUMENT STRUCTURE with a lot of elements and tags like <span>&lt;</span>html<span>&gt;</span>,<span>&lt;</span>head<span>&gt;</span>,<span>&lt;</span>body<span>&gt;</span>, and other tags and elements</p>
                    </div>
                    <img src={Animatedimg1}  alt=''/>
                </div>
                <br />
            </section>
            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <section className={Toggletext ? ' transform-200px-top cse-HTML-Document-Structure' : ' transform-160px-top cse-Document-Structure blur'} >
                <br />
                <br />
                <div className="scroll-line-dot"></div>
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='color-white heading-font'>
                            HTML Document Structure
                        </h1>
                        <br />
                        <p className='black-white  description'>
                            HTML stands for one of the most user-friendly and easy languages in web development.
                            <br />
                            Important to have a basic knowledge of its structure.
                            <br />
                            <br />
                            Main elements of the HTML document Structure:

                        </p>
                        <p className='black-white  Document-Type description'><span className='bold'>1.	Document Type Declaration (DOCTYPE)</span><br />
                            <span>&lt;!</span>DOCTYPE html<span>&gt;</span> defines the browser about which version of the HTML document is used.<br /><br />
                            <span className='bold margin-left-50px '>a.	DOCTYPE IN HTML 5:</span><br />

                            <div className="HTML-mini-compiler margin-left-50px margin-top-20px">
                                <div className="HTML-mini-compiler-borders">
                                    <div className="HTML-mini-compiler-inner-borders">
                                        <pre className=" CodeMirror-line ">
                                            <div className="w3-code notranslate htmlHigh">
                                                <span className="tagnamecolor">
                                                    <span className="tagcolor">&lt;</span>
                                                    !DOCTYPE html
                                                    <span className="tagcolor">&gt;</span>
                                                </span>

                                            </div>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <span className='bold margin-left-50px '>b.	DOCTYPE IN OTHER PREVIOUS HTML VERSIONS:</span><br />

                            <div className="HTML-mini-compiler margin-left-50px margin-top-20px">
                                <div className="HTML-mini-compiler-borders">
                                    <div className="HTML-mini-compiler-inner-borders">
                                        <pre className=" CodeMirror-line ">
                                            <div className="w3-code notranslate htmlHigh">
                                                <span className="tagnamecolor">
                                                    <span className="tagcolor">&lt;</span>
                                                    !DOCTYPE HTML
                                                    <span className="attributecolor">
                                                        <i></i>
                                                        PUBLIC
                                                        <span className="attributevaluecolor">
                                                            "<i>-//W3C//DTD HTML 4.01//EN</i>"
                                                            "<i>Your page link</i>"
                                                        </span>
                                                    </span>
                                                    <span className="tagcolor">&gt;</span>
                                                </span>
                                            </div>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </p>
                        <p className='black-white  Document-Type description'><span className='bold'>2.	HTML Element</span><br />
                            <span>&lt;</span>html<span>&gt;</span> is the base of every HTML document. Which contains all the work of the page.
                        </p>
                        <p className='black-white  Document-Type description'><span className='bold'>3.	Head Section</span><br />
                            <span>&lt;</span>head<span>&gt;</span>section contains <span>&lt;</span>meta<span>&gt;</span>, <span>&lt;</span>title<span>&gt;</span>, <span>&lt;</span>links<span>&gt;</span>, and other resource links too.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>a.	meta</span><br />

                            <span>&lt;</span>meta<span>&gt;</span> tag stands for

                            <span className='document-type-popup'>
                                <span className='margin-right-3px'></span>Metadata <span className='margin-right-3px'></span>
                                <div className='document-type-pop-up-main document-type-pop-up-main-3'>
                                    <p> Web services is a system of software allowing different device to interact with each other using the network. </p>

                                </div>
                            </span>
                            which is used by
                            <span className='document-type-popup'>

                                <span className='margin-right-3px'></span>browsers
                                <div className='document-type-pop-up-main document-type-pop-up-main-1'>
                                    <p>A application that help us to interact with the information on the World Wide Web also know as WWW. </p>
                                    <div className='pop-up-img'>
                                        <img src={Google} alt=''/>
                                        <img src={Bing} alt=''/>
                                        <img src={Yahoo} alt=''/>
                                    </div>
                                </div>
                            </span>
                            ,<span className='margin-right-3px'></span>
                            <span className='document-type-popup'>
                                search engines
                                <div className='document-type-pop-up-main document-type-pop-up-main-2'>
                                    <p>A software system that designed to search out  the information form world wild web according to the user's query.</p>
                                    <div className='pop-up-img'>
                                        <img src={Google} alt=''/>
                                        <img src={Bing} alt=''/>
                                        <img src={Yahoo} alt=''/>
                                    </div>

                                </div>
                            </span>
                            , and other
                            <span className='document-type-popup'>
                                <span className='margin-right-1px'></span> web services <span className='margin-right-3px'></span>
                                <div className='document-type-pop-up-main document-type-pop-up-main-3'>
                                    <p> Web services is a system of software allowing different device to interact with each other using the network. </p>

                                </div>
                            </span>
                            <span className='margin-right-3px'></span>
                            so when users search on the browser related to the page they will reach that page
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>b.	title</span><br />
                            <span>&lt;</span>title<span>&gt;</span> used for adding or changing the title of the HTML document.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>c.	links</span><br />
                            <span>&lt;</span>link<span>&gt;</span> used to link

                            <span className='document-type-popup'>
                                <span className='margin-right-3px'></span> CDN  <span className='margin-right-3px'></span>
                                <div className='document-type-pop-up-main document-type-pop-up-main-3'>
                                    <p> CDN stands for Content Delivery Network. it is a link to files from the server. CDN includes images, videos, text, and other resources. </p>

                                </div>
                            </span>
                            or a

                            <span className='document-type-popup'>
                                <span className='margin-right-3px'></span> CSS <span className='margin-right-3px'></span>
                                <div className='document-type-pop-up-main document-type-pop-up-main-3'>
                                    <p> CSS stands for Cascading Style Sheets. it is a style sheet language used for styling the page by pointing the tags like <span>&lt;</span>body<span>&gt;</span>, <span>&lt;</span>h1<span>&gt;</span>, and other tags. </p>

                                </div>
                            </span>
                            file to the HTML file.
                        </p>
                        <p className='black-white  Document-Type description'><span className='bold'>7.	Body Section</span><br />
                            Main information like video, text, image, and audio are included in the body section, this is the main tag that contains all the information of the page.
                        </p>
                        <br />



                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='HTML-Document-sturture-mini-compiler'>
                            <pre className="Document-Type-tag CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">!DOCTYPE html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <div className="w3-code notranslate htmlHigh">
                                <span className="tagnamecolor" >
                                    <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                    <span className='cm-m-xml cm-tag'>html</span>
                                    <i> </i>
                                    <span className="attributecolor" >
                                        <span className='cm-m-xml cm-tag attribute'>lang</span>
                                        <span className="attributevaluecolor" >
                                            ="<i>en</i>"
                                        </span>
                                    </span>
                                    <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                                </span>
                            </div>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Your page title</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>charset</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>utf-8</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <br />

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>name</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>viewport</i>"
                                    </span>
                                </span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>content</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>width=device-width, initial-scale=1</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <pre className="CodeMirror-line"><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h1</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">My First Heading</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h1</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">My first paragraph.</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                        </div>
                    </div>
                </div>

            </section>
            <svg class="transform-200px-top waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <section className={Toggletext ? ' transform-200px-top cse-HTML-intro' : ' transform-200px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML Headings</h1>
                        <br />
                        <p className='black-white  description'>HTML offers six types of headings <span>&lt;</span>h1<span>&gt;</span>, <span>&lt;</span>h2<span>&gt;</span>, <span>&lt;</span>h3<span>&gt;</span>, <span>&lt;</span>h4<span>&gt;</span>, <span>&lt;</span>h5<span>&gt;</span>, and <span>&lt;</span>h6<span>&gt;</span>. Which represents different levels of headings </p>
                        <p className='black-white  description'> Definitions of the headings:</p>

                        <p className='black-white  description'>1.	<span>&lt;</span>h1<span>&gt;</span> represents the highest level of heading in HTML, Used to define the main heading or title of the entire page. </p>
                        <br />

                        <p className='black-white  description'>2.	<span>&lt;</span>h2<span>&gt;</span> represents the second-level of the heading in HTML, used to define subheadings that are less important than the main heading (H1).</p>
                        <br />
                        <p className='black-white  description'>3.	<span>&lt;</span>h3<span>&gt;</span> represents the third level of the heading in HTML, Used to define the
                            <span className='document-type-popup'>
                                <span className='margin-right-3px'></span> Subheadings  <span className='margin-right-3px'></span>
                                <div className='document-type-pop-up-main document-type-pop-up-main-3 subheadings'>
                                    <p> A mini-headline or text that found under the main headline to give more information about the related information. </p>

                                </div>
                            </span>
                            of the main heading in the page less important than H1 and H2.</p>

                        <br />
                        <p className='black-white  description'>4.	<span>&lt;</span>h4<span>&gt;</span> represents the fourth level of the heading in HTML, mainly used to define the topic with the H3 heading.</p>

                        <br />
                        <p className='black-white  description'>5.	<span>&lt;</span>h5<span>&gt;</span> and <span>&lt;</span>h6<span>&gt;</span> represent the lowest level of the heading in HTML, mostly used to define Bullet points after subheadings or headings.</p>

                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className='HTML-Document-sturture-mini-compiler'>
                            <pre className="Document-Type-tag CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">!DOCTYPE html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <div className="w3-code notranslate htmlHigh">
                                <span className="tagnamecolor" >
                                    <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                    <span className='cm-m-xml cm-tag'>html</span>
                                    <i> </i>
                                    <span className="attributecolor" >
                                        <span className='cm-m-xml cm-tag attribute'>lang</span>
                                        <span className="attributevaluecolor" >
                                            ="<i>en</i>"
                                        </span>
                                    </span>
                                    <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                                </span>
                            </div>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Your page title</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>charset</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>utf-8</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <br />

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>name</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>viewport</i>"
                                    </span>
                                </span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>content</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>width=device-width, initial-scale=1</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <pre className="CodeMirror-line"><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h1</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 1</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h1</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h2</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 2</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h2</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h3</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 3</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h3</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h4</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 4</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h4</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h5</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 5</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h5</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">h6</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Heading 6</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">h6</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                        </div>
                    </div>
                </div>
                <br />
            </section>
            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> <section className={Toggletext ? ' transform-200px-top cse-HTML-Document-Structure' : ' transform-200px-top cse-Document-Structure blur'} >
                <br />
                <br />
                <div className="scroll-line-dot"></div>
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className=' heading-font'>HTML Paragraph</h1>
                        <br />
                        <p className='black-white  description'>The  <span>&lt;</span>p<span>&gt;</span> represents the paragraph in HTML. Used to add a paragraph text to the page. </p>

                        <span className='color-white' >Key points:</span>
                        <br />
                        <li className='HTML-intro-discover-more-div-ul-li margin-left-20px'>
                            <span className='bold'>1: Paragraph Spacing:  </span>
                            The browser automatically adds some space (margin) before and after every <span>&lt;</span>p<span>&gt;</span> tag
                        </li>
                        <br />
                        <li className='HTML-intro-discover-more-div-ul-li last-child margin-left-20px'>
                            <span className='bold'>2: Nested Tags:   </span>
                            Nesting allows to apply one element inside another element Like <span>&lt;</span>strong<span>&gt;</span> element used for bolding the text.
                        </li>
                        <br />
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>a. bold</span><br />
                            <span>&lt;</span>b<span>&gt;</span> used to bold a specific part of the text.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>b. pre element</span><br />
                            <span>&lt;</span>pre<span>&gt;</span> used to display text with fixed width and font.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>c. Horizontal Rules</span><br />
                            <span>&lt;</span>hr<span>&gt;</span> used to add a line or separate data on the page.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>d. strong</span><br />
                            <span>&lt;</span>strong<span>&gt;</span> used to make text bold or highlight the text.
                        </p>
                        <p className='black-white  Document-Type description margin-left-50px'><span className='bold'>e. Line Breaks</span><br />
                            <span>&lt;</span>br<span>&gt;</span> used to break the line and start a new paragraph without using another paragraph tag.
                        </p>
                        <br />

                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='HTML-Document-sturture-mini-compiler Height-80vh'>
                            <pre className="Document-Type-tag CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">!DOCTYPE html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <div className="w3-code notranslate htmlHigh">
                                <span className="tagnamecolor" >
                                    <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                    <span className='cm-m-xml cm-tag'>html</span>
                                    <i> </i>
                                    <span className="attributecolor" >
                                        <span className='cm-m-xml cm-tag attribute'>lang</span>
                                        <span className="attributevaluecolor" >
                                            ="<i>en</i>"
                                        </span>
                                    </span>
                                    <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                                </span>
                            </div>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">Your page title</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">title</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>charset</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>utf-8</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <br />

                            <span className="tagnamecolor" >
                                <span className="cm-m-xml cm-tag cm-bracket" >&lt;</span>
                                <span className='cm-m-xml cm-tag'>meta</span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>name</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>viewport</i>"
                                    </span>
                                </span>
                                <i> </i>
                                <span className="attributecolor" >
                                    <span className='cm-m-xml cm-tag attribute'>content</span>
                                    <span className="attributevaluecolor" >
                                        ="<i>width=device-width, initial-scale=1</i>"
                                    </span>
                                </span>
                                <span className="cm-m-xml cm-tag cm-bracket" >&gt;</span>
                            </span>
                            <pre className="CodeMirror-line"><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">head</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">A Paragraph</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">A Paragraph with <span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">bold</span><span className="cm-m-xml cm-tag cm-bracket">/&gt;</span> bold tag</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line ">
                                <span >
                                    <span className="cm-m-xml cm-tag cm-bracket">&lt;</span>
                                    <span className="cm-m-xml cm-tag">pre</span>
                                    <span className="cm-m-xml cm-tag cm-bracket">&gt;</span>
                                    <span className="cm-m-xml">
                                        <br />
                                        A Paragraph
                                        <br />
                                        with pre element
                                        <br />
                                    </span>
                                    <span className="cm-m-xml cm-tag cm-bracket">&lt;/</span>
                                    <span className="cm-m-xml cm-tag">pre</span>
                                    <span className="cm-m-xml cm-tag cm-bracket">&gt;</span>
                                </span>
                            </pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">A Paragraph with <span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">hr</span><span className="cm-m-xml cm-tag cm-bracket">/&gt;</span> Horizontal Rules</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">A Paragraph with <span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">stong</span><span className="cm-m-xml cm-tag cm-bracket">/&gt;</span> stong tag</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span><span className="cm-m-xml">A Paragraph with <span className="cm-m-xml cm-tag cm-bracket">&lt;</span><span className="cm-m-xml cm-tag">br</span><span className="cm-m-xml cm-tag cm-bracket">/&gt;</span> line break</span><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">p</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">body</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>
                            <pre className=" CodeMirror-line "><span ><span className="cm-m-xml cm-tag cm-bracket">&lt;/</span><span className="cm-m-xml cm-tag">html</span><span className="cm-m-xml cm-tag cm-bracket">&gt;</span></span></pre>

                        </div>
                    </div>
                </div>

            </section>
            <svg class="transform-200px-top waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <section className={Toggletext ? ' transform-200px-top cse-HTML-intro' : ' transform-200px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML HYPERLINKS</h1>
                        <br />
                        <p className='black-white  description'>HTML Hyperlinks are used to link pages in HTML that can be added in text, buttons, or images. </p>

                        <p className="black-white text-align-left"><span className="bold">Here's an example of how to create a basic hyperlink:</span></p>


                        <p className='black-white  description'>In this example, "Click here," linked to "https://www.example.com."</p>
                        <p className='black-white  description'>Hyperlinks can also be used to link to the sections within the same page by using the id attribute to identify the target element. Here's an example:</p>
                        <br />
                        <p className='black-white  description'>By clicking on "Go to Section 1" the page will scroll to the element with id="section1."</p>
                        <p className='black-white  description'>Make a link to open in a new tab or window by using the target attribute:</p>
                        <br />
                        <p className='black-white  description'>Clicking on "Open in New Tab" will open the link in a new browser tab or window.</p>


                        <br />
                        <br />
                    </div>
                    <div className='multi-mini-compilers'>
                        <div className="HTML-mini-compiler">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i></i> href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>www.example.com</i>"
                                                    </span></span><span className="tagcolor" >&gt;</span></span><i>
                                                Click here</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="HTML-mini-compiler ">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i> </i>href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>#section1</i>"
                                                    </span></span><span className="tagcolor" >&gt;</span></span><i>
                                                Go to Section 1</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="HTML-mini-compiler ">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i> </i>href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>www.example.com</i>"
                                                    </span></span><span className="tagcolor" ><i></i> </span></span><i />
                                            <i></i>target
                                            <span className="attributevaluecolor" >
                                                ="<i>_blank</i>"
                                            </span>
                                            <span className="tagcolor" >&gt;</span><i>
                                                Open in New Tab</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>

            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg><section className={Toggletext ? ' transform-200px-top cse-HTML-Document-Structure' : ' transform-200px-top cse-Document-Structure blur'} >
                <br />
                <br />
                <div className="scroll-line-dot"></div>
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML FILE LINKS</h1>
                        <br />
                        <p className='black-white  description'>To connect files like CSS and JavaScript to the HTML document by using the <span>&lt;</span>link<span>&gt;</span> and <span>&lt;</span>script<span>&gt;</span>  elements, respectively. Here's how to do it: </p>
                        <br />
                        <p className='black-white  Document-Type description'><span className='bold'>Linking a CSS file:</span><br />
                            Put the CSS file link in the <span>&lt;</span>head<span>&gt;</span> section of your HTML document.
                            Replace 'your_css_file.css' with the actual path of the CSS file:

                        </p>
                        <br />
                        <p className='black-white  Document-Type description'><span className='bold'>Linking a JavaScript file:</span><br />
                            Place the JavaScript link just before the closing <span>&lt;/</span>body<span>&gt;</span>tag. This ensures that the JavaScript code is loaded after the HTML content is parsed.<br /><br />
                            Replace 'your_js_file.js' with the actual path to the JavaScript file:
                        </p>



                    </div>
                    <div>

                    </div>
                </div>

            </section>

            <svg class="transform-200px-top waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            <section className={Toggletext ? ' transform-200px-top cse-HTML-intro' : ' transform-200px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className=' heading-font'>HTML STYLES</h1>
                        <br />
                        <p className='black-white  description'>In HTML, use CSS (Cascading Style Sheets) to style the webpage elements. Including its color, size, font, layout, and more. There are several methods to apply styles in HTML:
                        </p>
                        <br />

                        <p className='black-white  description'>Inline styles: adding styles directly in HTML elements by using the 'style' attribute. Main compiler with 3 slides</p>
                        <br />
                        <p className='black-white  description'>Internal styles: styles inside the <span>&lt;</span>style<span>&gt;</span> tag located in the <span>&lt;</span>head<span>&gt;</span> section of your HTML document.</p>

                        <br />
                        <p className='black-white  description'>External styles: make a separate CSS file with the ‘.css’ extension and connect it to the HTML document by using the <span>&lt;</span>link<span>&gt;</span> tag.</p>


                        <br />
                        <br />
                    </div>
                    <div className="HTML-mini-compiler">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler ">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler ">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            <svg class="transform-200px-top waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <section className={Toggletext ? ' transform-200px-top cse-HTML-intro' : ' transform-200px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML SPAN</h1>
                        <br />
                        <p className='black-white  description'>In HTML, the <span>&lt;</span>span<span>&gt;</span> element is an element that used to point a specific part in a document. Like in <span>&lt;</span>p<span>&gt;</span>, <span>&lt;</span>h4<span>&gt;</span>, <span>&lt;</span>h5<span>&gt;</span> and etc.</p>

                        <p className="black-white text-align-left"><span className="bold">Here's an example of how to create a basic hyperlink:</span></p>


                        <p className='black-white  description'>In this example, "Click here," linked to "https://www.example.com."</p>
                        <p className='black-white  description'>Hyperlinks can also be used to link to the sections within the same page by using the id attribute to identify the target element. Here's an example:</p>
                        <br />
                        <p className='black-white  description'>By clicking on "Go to Section 1" the page will scroll to the element with id="section1."</p>
                        <p className='black-white  description'>Make a link to open in a new tab or window by using the target attribute:</p>
                        <br />
                        <p className='black-white  description'>Clicking on "Open in New Tab" will open the link in a new browser tab or window.</p>


                        <br />
                        <br />
                    </div>
                    <div className='multi-mini-compilers'>
                        <div className="HTML-mini-compiler">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i></i> href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>www.example.com</i>"
                                                    </span></span><span className="tagcolor" >&gt;</span></span><i>
                                                Click here</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="HTML-mini-compiler ">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i> </i>href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>#section1</i>"
                                                    </span></span><span className="tagcolor" >&gt;</span></span><i>
                                                Go to Section 1</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="HTML-mini-compiler ">
                            <div className="HTML-mini-compiler-borders">
                                <div className="HTML-mini-compiler-inner-borders">
                                    <pre className=" CodeMirror-line ">
                                        <div className="w3-code notranslate htmlHigh">
                                            <span className="tagnamecolor" >
                                                <span className="tagcolor" >&lt;</span>
                                                a

                                                <span className="attributecolor" >
                                                    <i> </i>href
                                                    <span className="attributevaluecolor" >
                                                        ="<i>www.example.com</i>"
                                                    </span></span><span className="tagcolor" ><i></i> </span></span><i />
                                            <i></i>target
                                            <span className="attributevaluecolor" >
                                                ="<i>_blank</i>"
                                            </span>
                                            <span className="tagcolor" >&gt;</span><i>
                                                Open in New Tab</i>
                                            <span className="tagnamecolor">
                                                <span className="tagcolor">&lt;</span>
                                                /a
                                                <span className="tagcolor">&gt;</span>
                                            </span>
                                        </div>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>

            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg><section className={Toggletext ? ' transform-200px-top cse-HTML-Document-Structure' : ' transform-200px-top cse-Document-Structure blur'} >
                <br />
                <br />
                <div className="scroll-line-dot"></div>
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>HTML FILE LINKS</h1>
                        <br />
                        <p className='black-white  description'>To connect files like CSS and JavaScript to the HTML document by using the <span>&lt;</span>link<span>&gt;</span> and <span>&lt;</span>script<span>&gt;</span>  elements, respectively. Here's how to do it: </p>
                        <br />
                        <p className='black-white  Document-Type description'><span className='bold'>Linking a CSS file:</span><br />
                            Put the CSS file link in the <span>&lt;</span>head<span>&gt;</span> section of your HTML document.
                            Replace 'your_css_file.css' with the actual path of the CSS file:

                        </p>
                        <br />
                        <p className='black-white  Document-Type description'><span className='bold'>Linking a JavaScript file:</span><br />
                            Place the JavaScript link just before the closing <span>&lt;/</span>body<span>&gt;</span>tag. This ensures that the JavaScript code is loaded after the HTML content is parsed.<br /><br />
                            Replace 'your_js_file.js' with the actual path to the JavaScript file:
                        </p>



                    </div>
                    <div>

                    </div>
                </div>

            </section>

            <svg class="transform-200px-top waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 318"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            <section className={Toggletext ? ' transform-200px-top cse-HTML-intro' : ' transform-200px-top cse-HTML-intro blur'} >
                <br />
                <br />
                <br />
                <br />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className=' heading-font'>HTML STYLES</h1>
                        <br />
                        <p className='black-white  description'>In HTML, use CSS (Cascading Style Sheets) to style the webpage elements. Including its color, size, font, layout, and more. There are several methods to apply styles in HTML:
                        </p>
                        <br />

                        <p className='black-white  description'>Inline styles: adding styles directly in HTML elements by using the 'style' attribute. Main compiler with 3 slides</p>
                        <br />
                        <p className='black-white  description'>Internal styles: styles inside the <span>&lt;</span>style<span>&gt;</span> tag located in the <span>&lt;</span>head<span>&gt;</span> section of your HTML document.</p>

                        <br />
                        <p className='black-white  description'>External styles: make a separate CSS file with the ‘.css’ extension and connect it to the HTML document by using the <span>&lt;</span>link<span>&gt;</span> tag.</p>


                        <br />
                        <br />
                    </div>
                    <div className="HTML-mini-compiler">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler ">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="HTML-mini-compiler ">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="HTML-mini-compiler opcity0">
                        <div className="HTML-mini-compiler-borders">
                            <div className="HTML-mini-compiler-inner-borders">
                                <pre className=" CodeMirror-line ">
                                    <div className="w3-code notranslate htmlHigh">
                                        <span className="tagnamecolor" >
                                            <span className="tagcolor" >&lt;</span>
                                            a

                                            <span className="attributecolor" >
                                                href
                                                <span className="attributevaluecolor" >
                                                    ="<i>url</i>"
                                                </span></span><span className="tagcolor" >&gt;</span></span><i>
                                            link text</i>
                                        <span className="tagnamecolor">
                                            <span className="tagcolor">&lt;</span>
                                            /a
                                            <span className="tagcolor">&gt;</span>
                                        </span>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
            <svg class="transform-200px-top waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,208C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>


            <section className='cse-header-top'>
                <Link to="cse-HTML-header" smooth={true} duration={500} offset={-70}>
                    <GrLinkTop className='' />
                </Link>
            </section>
        </>
    )
}
