import React, {Component} from "react";

class  RemoveDupPics extends Component {
  
  constructor(){
                       
    }           
   
    componentDidMount () {
        window.scrollTo(0, 0)
    }
    render() {   
        
        const path = process.env.REACT_APP_FOR_PATH;        
      return(        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">
            <div className="CenterMyBorder" >
                I got tired of seeing some of my pictures backed up in a million folders, so I decided to create a small C# tool to identify the duplicates.  Just adding 
                here.  Not super fast, but it got the job done. <br/>

                <img src={path + "/images/softwareNotes/findduplicates.png"} alt="find duplicates screenshot"/><br/>

                These are the parts of the code that were more interesting<br/>

                To enter the folders to search I used a regular textbox and a regular button.  For both buttons, call another method:

                <div className="CodeContainer">
                private void button1_Click(object sender, EventArgs e) {"{"} <br/> 
                    &emsp; this.buttonSelectClick(FolderOption.one);<br/>
                {"}"}<br/><br/>
                private void buttonSelectClick(FolderOption op)
                {"{"}<br/>
                &emsp;using (var fbd = new FolderBrowserDialog())<br/>
                &emsp;{"{"}<br/>
                &emsp;&emsp;DialogResult result = fbd.ShowDialog();<br/>
                &emsp;&emsp;if (result == DialogResult.OK && !string.IsNullOrWhiteSpace(fbd.SelectedPath))<br/>
                &emsp;&emsp;{"{"}<br/>
                &emsp;&emsp;&emsp;if (op == FolderOption.one)<br/>
                &emsp;&emsp;&emsp;{"{"}<br/>
                &emsp;&emsp;&emsp;&emsp;this.textBox1.Text = fbd.SelectedPath;   <br/>
                ...<br/>
               </div>                    
            
                There are some checks in the code for data validation but nothing interesting there.  To display the duplicates pictures I used <strong>FlowLayoutPanels.</strong>
                I cleared the contents before adding pictures to them.
                <div className="CodeContainer">
                this.flowLayoutPanel3.Controls.Clear();
                </div>
                To find the list of files in a directory, I used this (the second argument being the type of file):
                <div className="CodeContainer">
                Directory.GetFiles(path1, this.textBox3.Text)
                </div>

                I wanted to get the names of the duplicates on the same list, so created this method to find them.  The getImageForFile in the code below is 
                just doing: Bitmap image = new Bitmap(filename);

                <div className="CodeContainer">
                private List{"<DuplicatePicNames>"} findDuplicatePics(string[] originalArray1, string[] originalArray2)<br/>
                {"{"}<br/>
                    &emsp;//use a progress bar to show that things are happening.<br/>
                &emsp;this.progressBar1.Maximum = originalArray1.Count() * originalArray2.Count();<br/>
                &emsp;this.progressBar1.Value = 1;<br/>
                &emsp;this.progressBar1.Step = 1;<br/>
                &emsp;foreach (string filenameMain in originalArray1)<br/>
                &emsp;{"{"}<br/>
                &emsp;&emsp;//use the using so memory doesn't run out<br/>
                &emsp;&emsp;using (imageMain = getImageForFile(filenameMain) )<br/>
                &emsp;&emsp;...//need to compare each filename in array 1 with each one in array2.<br/>
                &emsp;&emsp;...//compare the sizes first (width and height) because if they are not the same you know the pics are not the same.<br/>
                &emsp;&emsp;...//tried to use ImageComparer but was not lucky with that, so see how I compared the images below in the other section.<br/>
                &emsp;&emsp;...//set an imagesAreDifferent boolean to true as soon as you know they are different.  If at the end of the comparison the images are not different
                , add them to the new list.  They will be returned as part of the list by the method.
                </div>

                In the method above, the code that I used to compare the images (outside of comparing sizes) is this:

                <div className="CodeContainer">
                    {"for (int i = 0; i < imageMain.Width; i}"}<br/>
                    {"{"}<br/>
                    &emsp;{"for (int j = 0; j < imageMain.Height; j++)"}<br/>
                    &emsp;{"{"}<br/>
                    &emsp;&emsp;imgMain_ref = imageMain.GetPixel(i, j).ToString();<br/>
                    &emsp;&emsp;imgAux_ref = imageAux.GetPixel(i, j).ToString();<br/>                                    
                    &emsp;&emsp;if (imgMain_ref != imgAux_ref)<br/>
                    &emsp;&emsp;{"{"}<br/>
                    &emsp;&emsp;&emsp;imageIsDifferent = true;<br/>
                    &emsp;&emsp;&emsp;break;<br/>
                    &emsp;&emsp;{"}"}<br/>
                    &emsp;{"}"}<br/>
                    {"}"}<br/>
                </div>

                Once you have the duplicate names in the list of duplicates, this is how you can put them in the screen.  Using the usings and creating a new tmp picture is 
                important so you don't get the memory to run out, and so you don't lock the pictures while you have them up since you need to go to the 
                original folders to delete them if needed.

                <div className="CodeContainer">
                {"..."}<br/>
                {"foreach (DuplicatePicNames dup in duplicatesNamesList)"}<br/>
                {"..."}<br/>
                &emsp;PictureBox pic = new PictureBox();<br/>
                &emsp;using (tmp = new Bitmap(dup.nameInFolder1))<br/>
                &emsp;&emsp;pic.Image = new Bitmap(tmp);<br/>
                &emsp;pic.ClientSize = new Size(100, 100);  <br/>  
                &emsp;pic.SizeMode = PictureBoxSizeMode.Zoom;<br/>
                &emsp;pic.Name = dup.nameInFolder1;<br/>
                &emsp;<strong>pic.Parent = this.flowLayoutPanel1;</strong><br/>
                &emsp;pic = new PictureBox();<br/>
                &emsp;using (tmp = new Bitmap(dup.nameInFolder2))<br/>
                &emsp;&emsp;pic.Image = new Bitmap(tmp);<br/>
                &emsp;pic.ClientSize = new Size(100, 100);    <br/>                       
                &emsp;pic.SizeMode = PictureBoxSizeMode.Zoom;<br/>
                &emsp;pic.Name = dup.nameInFolder2;<br/>
                &emsp; <strong>pic.Parent = this.flowLayoutPanel3;</strong>
                </div>

                And that's it.  Not super cool, but it worked.  Comparing pictures is not very fast though, but this was faster than me doing it myself.
            </div>
        </div>
      </React.Fragment>)
  };
}

export default RemoveDupPics;

