import React, {useState, useEffect} from "react";
import { generateRandomNumberForXNumberOfValues } from "../../commonJS";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function CompareNumbersComponent (props) {     

    let mainDiv = React.createRef();   
    
    const [table1, setTable] = useState("");
    const [tensAndOnesNumber1, setTensAndOnesNumber1] = useState("");
    const [tensAndOnesNumber2, setTensAndOnesNumber2] = useState("");
    const [greaterThan, setGreaterThan] = useState("");

    /*
    let table1S = React.useRef("<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>"
    +"<tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>"       
    +"<tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>"
    +"<tr><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td></tr>"
    +"<tr><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td></tr>"
    +"<tr><td>51</td><td>52</td><td>53</td><td>54</td><td>55</td><td>56</td><td>57</td><td>58</td><td>59</td><td>60</td></tr>"
    +"<tr><td>61</td><td>62</td><td>63</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td><td>70</td></tr>"
    +"<tr><td>71</td><td>72</td><td>73</td><td>74</td><td>75</td><td>76</td><td>77</td><td>78</td><td>79</td><td>80</td></tr>"
    +"<tr><td>81</td><td>82</td><td>83</td><td>84</td><td>85</td><td>86</td><td>87</td><td>88</td><td>89</td><td>90</td></tr>"
    +"<tr><td>91</td><td>92</td><td>93</td><td>94</td><td>95</td><td>96</td><td>97</td><td>98</td><td>99</td><td>100</td></tr>"
    +"<tr><td>101</td><td>102</td><td>103</td><td>104</td><td>105</td><td>106</td><td>107</td><td>108</td><td>109</td><td>110</td></tr></table>");           
      */
    let table1S = React.useRef("<table><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>"
    +"<tr><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>"       
    +"<tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>"
    +"<tr><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td></tr>"
    +"<tr><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td></tr>"
    +"<tr><td>51</td><td>52</td><td>53</td><td>54</td><td>55</td><td>56</td><td>57</td><td>58</td><td>59</td><td>60</td></tr>"
    +"<tr><td>61</td><td>62</td><td>63</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td><td>70</td></tr>"
    +"<tr><td>71</td><td>72</td><td>73</td><td>74</td><td>75</td><td>76</td><td>77</td><td>78</td><td>79</td><td>80</td></tr>"
    +"<tr><td>81</td><td>82</td><td>83</td><td>84</td><td>85</td><td>86</td><td>87</td><td>88</td><td>89</td><td>90</td></tr>"
    +"<tr><td>91</td><td>92</td><td>93</td><td>94</td><td>95</td><td>96</td><td>97</td><td>98</td><td>99</td></tr>"
    +"</table>");       


    useEffect( () => {
        
        disableBodyScroll(mainDiv.current);

        //for cleanup (will unmount)
        return function cleanup () {
            clearAllBodyScrollLocks();
        }     
    })

   function setUpTable() {        
        let aux = "";        
        let number1 = generateRandomNumberForXNumberOfValues(99);
        let number2 = generateRandomNumberForXNumberOfValues(99); 
        let stringNum1 = number1.toString();   
        let stringNum2 = number2.toString();   
        let greaterThanS = "";
    
        if (Number(number1) !== NaN && Number(number2) !== NaN){        
            
            //tens and ones number      
            if (stringNum1.length === 1) { stringNum1 = "_ " + stringNum1}
            if (stringNum2.length === 1) { stringNum2 = "_" + stringNum2}
            setTensAndOnesNumber1(stringNum1);
            setTensAndOnesNumber2(stringNum2);            
            
            //greater than
            if (number1 > number2){
                greaterThanS = number1 + " > " + number2;
            }else if (number2 > number1){
                greaterThanS = number1 + " < " + number2;
            }else{
                greaterThanS = number1 + " = " + number2;
            }
            setGreaterThan(greaterThanS);

            //table of numbers
            aux = table1S.current;        
            aux = aux.replace("<td>" + number1 + "</td>", "<td bgcolor='yellow'>" + number1 + "</td>")
            aux = aux.replace("<td>" + number2 + "</td>", "<td bgcolor='yellow'>" + number2 + "</td>")
            
            let html1 = new DOMParser().parseFromString(aux, "text/xml");                                        
            setTable(html1.documentElement.outerHTML);

            
        }
    
   }

    var divHorContainer = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        userSelect:"none",
        margin:"15px"
    }      

    return(
  
      
        <React.Fragment>
             <div className="TopMarginToDealWithNavBarAll CenterMe" ref={mainDiv}>  
                <button className="buttonGeneral" onClick={setUpTable}>Click for numbers</button>
                <div style={divHorContainer}>

                    <div style={{width:"36vw", margin:"5px", textAlign:"right",border:"solid deepskyblue 3px", fontSize:"1.5vw" }}>
                        <div dangerouslySetInnerHTML={{__html: table1}}></div>
                    </div>

                    <div style={{width:"25vw", textAlign:"center", border:"solid deepskyblue 3px",  margin:"6px", fontSize:"10.5vw", background: "linear-gradient(to right, skyblue 50%, lightpink 50%)"}}>
                        {tensAndOnesNumber1} <br/>
                        {tensAndOnesNumber2} <br/>
                    </div>

                    <div style={{width:"25vw",border:"solid deepskyblue 3px", margin:"6px",  fontSize:"7vw"}}>
                       {greaterThan}
                    </div>
                </div>
             </div>
        </React.Fragment>)
    };  
        

export default CompareNumbersComponent;
