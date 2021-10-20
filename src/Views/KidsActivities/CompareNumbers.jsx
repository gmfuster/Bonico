import React, {useState, useEffect} from "react";

function CompareNumbersComponent (props) {     
               
    const [line1, setLine1] = useState(<tr>
        <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
        </tr>);    
    const [line2, setLine2] = useState(<tr>
        <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
        </tr>); 
    const [line3, setLine3] = useState(<tr>
        <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td>
        </tr>); 
    const [line4, setLine4] = useState(<tr>
        <td>31</td><td>32</td><td>33</td><td>34</td><td>35</td><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td>
        </tr>); 
    const [line5, setLine5] = useState(<tr>
        <td>41</td><td>42</td><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td><td>49</td><td>50</td>
        </tr>); 
    const [line6, setLine6] = useState(<tr>
        <td>51</td><td>52</td><td>53</td><td>54</td><td>55</td><td>56</td><td>57</td><td>58</td><td>59</td><td>60</td>
        </tr>); 
    const [line7, setLine7] = useState(<tr>
        <td>61</td><td>62</td><td>63</td><td>64</td><td>65</td><td>66</td><td>67</td><td>68</td><td>69</td><td>70</td>
        </tr>); 
    const [line8, setLine8] = useState(<tr>
        <td>71</td><td>72</td><td>73</td><td>74</td><td>75</td><td>76</td><td>77</td><td>78</td><td>79</td><td>80</td>
        </tr>); 
    const [line9, setLine9] = useState(<tr>
        <td>81</td><td>82</td><td>83</td><td>84</td><td>85</td><td>86</td><td>87</td><td>88</td><td>89</td><td>90</td>
        </tr>); 
    const [line10, setLine10] = useState(<tr>
        <td>91</td><td>92</td><td>93</td><td>94</td><td>95</td><td>96</td><td>97</td><td>98</td><td>99</td><td>100</td>
        </tr>); 
    const [line11, setLine11] = useState(<tr>
        <td>101</td><td>102</td><td>103</td><td>104</td><td>105</td><td>106</td><td>107</td><td>108</td><td>109</td><td>110</td>
        </tr>); 

    //let item = React.useRef("");       
    //let size = React.useRef(props.size);     

    //item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;        
      
/*
    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:color , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[color] )

    useEffect( () => {
        
        item.current =  <div  style={{ width:"100%", height:"100%", background:initColor , fontSize:size.current  }} onClick={() => {checkForColor()}}>{props.number1} {props.operator} {props.number2} = {props.result} </div>;           
    },[props.key] )
    */

   function setUpTable(x,y) {
    //todo
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
             <div className="TopMarginToDealWithNavBarAll CenterMe">  
                <div style={divHorContainer}>
                    <div style={{width:"38vw", margin:"6px", textAlign:"right"}}>
                        <table >
                            {line1}
                            {line2}
                            {line3}
                            {line4}
                            {line5}
                            {line6}
                            {line7}
                            {line8}
                            {line9}
                            {line10}
                            {line11}
                        </table>
                        
                    </div>
                    <div style={{width:"25vw", border:"solid deepskyblue 3px",  margin:"6px"}}>
                        hhhh
                    </div>
                    <div style={{width:"25vw",border:"solid deepskyblue 3px", margin:"6px"}}>
                       hhh
                    </div>
                </div>
             </div>
        </React.Fragment>)
    };  
        

export default CompareNumbersComponent;