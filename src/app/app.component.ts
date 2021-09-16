import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public minDate: Date = new Date ("05/07/2021");
  public maxDate: Date = new Date ("05/27/2021");
  public dateValue: Date = new Date ("05/16/2021");
  constructor () {}
  isStory=true;
  title = 'ffhgf';
  video:string='';
  isHidden:boolean=false;
  like:string='not like wow';
  youknowmyname(): string{
    return this.video+" "+this.like;
  }
  texts:string="DEV";
  text2:string="hurrey4";
  isActive:boolean=true;
  isAddStory:boolean=false;
  storyDescription="";
  storyNo="";

  public RstartDate: Date = new Date ();
  public RendDate: Date = new Date ();
  RTHW="0";
  CP="0";
  Remarks="";
  employeeWorked=[];
  fillDesc(storyDesc)
  {
   this.video=storyDesc;
   this.video=this.storyNo+ " ("+storyDesc+")";
  }
  claculatePer(conPer){
    //this.employeeWorked=this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy !=this.loginUser);
    this.video=this.storyNo;
    var total=0;
    var usersDetail=this.Users.filter(x=>x.userID!==this.loginUser && x.Role==this.userType);
    //alert(usersDetail.length)
    for(var i=0;i< usersDetail.length;i++)
    {
      //alert(usersDetail[i].userID)
      var userContributionByRole = this.workbook.filter(x=>x.Story==this.storyNo)[0].Details.filter(y=>y.WorkedBy ==usersDetail[i].userID);
      if(userContributionByRole.length>0)
      {
        //alert(userContributionByRole[0].WorkedBy);
        if(this.employeeWorked.indexOf(userContributionByRole[0])==-1)
        {
          this.employeeWorked.push(userContributionByRole[0]);
        }
        //alert(this.employeeWorked[0].WorkedBy);
        total=total+(userContributionByRole[0].ContributionPer)
      }
      //
      //
    }
    //for(var i=0;i< this.employeeWorked.length;i++)
    //{
     // total=total+(this.employeeWorked[i].ContributionPerb)
    //}
    var userContribution: number = +conPer;
    if((total+userContribution)>100)
    {
      this.CP="";
    }
  }
  MyFun(type){
    //console.log(event.)
    // if(type=="QA")
    // {
    // this.texts="QA";
    // }
    // else
    // {
    // this.texts="DEV";
    // }
 
    if(this.workbook.filter(x=>x.Story==type).length==0)
    {
      this.isStory=false;
      this.storyNo=type;
    }
    else
    {
      this.video=type+ " ("+this.workbook.filter(x=>x.Story==type)[0].Desc+")";
      this.storyNo=type;
      this.RstartDate=new Date(this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy==this.loginUser)[0].StartDate);
      this.RendDate=new Date(this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy==this.loginUser)[0].EndDate);
      this.RTHW=this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy==this.loginUser)[0].THW;
      this.CP=this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy==this.loginUser)[0].ContributionPer.toString();
      this.Remarks=this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy==this.loginUser)[0].RemarkId;
      this.Remarks=this.remarks.filter(x=>x.RemarkID==this.Remarks && x.Story==type)[0].Remark;
      this.storyDescription=this.workbook.filter(x=>x.Story==type)[0].Desc;
      //this.employeeWorked=this.workbook.filter(x=>x.Story==type)[0].Details.filter(y=>y.WorkedBy !=this.loginUser);
      
    }
    this.isAddStory=false;
    this.texts="QA";
  }
  SetAddStory(){
    //console.log(event.)
    if(this.isAddStory==true)
    {
    this.isAddStory=false;
    }
    else
    {
      this.isAddStory=true;
    }
  }
  gv="blue";
  bd="bold";
  UserId="";
  pwd="";
  multiClass:string='colorChange bgColor';
  userType="";
  GetColor(vent){
    this.gv=vent;
    console.log(vent)
     //this.gv=$event.target.value;
  }
  getMail(){
    this.texts=this.text2;
  }
  login(){
    var getUserData =this.Users.filter(x=>x.userID==this.UserId && x.pwd==this.pwd)[0]
    this.loginUser=getUserData.userID;
    this.userType=getUserData.Role;
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  storyno="";
  loginUser="";
  category=["abcd","sdsd","qqqqq"];
  workbook=[{"Story":"SC-3212","Desc":"Fixed CMS 165 IPP issue","Details":[{"WorkedBy":"Varun","StartDate":
"02/07/2021","EndDate":"10/07/2021","THW":"5","ContributionPer":30,"RemarkId":"1"},{"WorkedBy":"Ajit","StartDate":
"02/07/2021","EndDate":"10/07/2021","THW":"5","ContributionPer":50,"RemarkId":"1"},{"WorkedBy":"Feroz","StartDate":
"02/07/2021","EndDate":"10/07/2021","THW":"5","ContributionPer":10,"RemarkId":"1"}]},
{"Story":"SC-3210","Desc":"Fixed CMS 122 NUM issue","Details":[{"WorkedBy":"Som","StartDate":
"02/07/2021","EndDate":"10/07/2021","THW":"5","ContributionPer":30,"RemarkId":"3"}]},{"Story":"SC-3219","Desc":"Fixed CMS 90 IPP issue","Details":[{"WorkedBy":"Ajeet","StartDate":
"02/07/2021","EndDate":"10/07/2021","THW":"3","ContributionPer":30,"RemarkId":"4"}]}];

Users=[{"userID":"Ajeet","userLname":"Ajeet","userFname":"Mittal","Role":"Dev","pwd":"1234"},
{"userID":"Ajit","userLname":"Ajit","userFname":"Verma","Role":"Dev","pwd":"1234"},
{"userID":"Feroz","userLname":"Feroz","userFname":"Saikh","Role":"QA","pwd":"1234"},
{"userID":"Pawan","userLname":"Pawan","userFname":"Barnwal","Role":"QA","pwd":"1234"},
{"userID":"Bani","userLname":"Banipriya","userFname":"Nayak","Role":"QA","pwd":"1234"}
,{"userID":"Som","userLname":"Somendra","userFname":"Mishra","Role":"Dev","pwd":"1234"}
,{"userID":"Varun","userLname":"Varun","userFname":"Mishra","Role":"Dev","pwd":"1234"}]

remarks=[{"RemarkID":"1","Story":"SC-3212","Remark":"varun rem"},{"RemarkID":"3","Story":"SC-3210","Remark":"Som rem"},{"RemarkID":"4","Story":"SC-3219","Remark":"Ajeet rem"}]
}

