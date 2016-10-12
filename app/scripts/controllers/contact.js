'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('ContactCtrl', function () {
    skrollr.init().destroy();
    this.contents1=list1;
 this.contents2=list2;
 this.contents3=list3;

  });
  var list1=[
	
	{
	Person_Name:"Neil Pendse",
	Team_Name:"Concept & Design",
	Email:" neil@shaastra.org",
	Phone:"+91 9176283794",
	Person_Name2:"Abhijit S Gupta",
	Email2:" abhijit@shaastra.org",
	Phone2:"+91 9940439339",
	Person_Name3:"Bharath",
	Email3:"bharath@shaastra.org",
	Phone3:"+91 9940579724",
	Description:"The department responsible for everything aesthetically appealing and creative on online and on-ground platforms, Concept and Design handles social media marketing, graphic design, photography, videography and video editing, and the ambience of the fest. To have a look at our work, do visit our <a href='https://www.facebook.com/Shaastra/'>Facebook</a> page and our <a href='https://www.youtube.com/user/iitmshaastra/'>YouTube</a> channel, and stay tuned for more exciting content!"
	},
	{
	Person_Name:"Adarsh",
	Team_Name:"Events",
	Email:"adarshg@shaastra.org",
	Phone:"+91 9600193202",
	
	Person_Name2:"Suvindu Ch",
	
	Email2:"suvindu@shaastra.org",
	Phone2:"+91 9940248645",
	
	Person_Name3:"Rohit Thakran",
	
	Email3:"rohit@shaastra.org",
	Phone3:"+91 9958515422",
Description:"From Aero to Quizzes to Research events & Robotics to Coding workshops, the <a href='#events'>Events</a> & <a href='#/event-lists/57e29fa4a65edf661ac45204'>Workshops</a> team handles the myriad events and workshops conducted at Shaastra. If you ever need help with something in the Problem Statement or Event Format or any other detail of an event or workshop, please feel free to contact the respective event coordinators."
	},
	{
	Person_Name:"M Aghamarshana",
	Team_Name:"Media & Student Relations",
	Email:"aghamarshana@shaastra.org",
	Phone:"+91 8122495355",
	
	Person_Name2:"R Rathna Kumar",
	
	Email2:"rathnakumar@shaastra.org",
	Phone2:"+91 9677081113",
	
	Person_Name3:"Hitesh Singla",
	
	Email3:"hitesh@shaastra.org",
	Phone3:"+91 9677043890",
Description:"We are responsible for publicity of Shaastra across India, and our work is possibly what got you here. Media and Student Relations handles all outreach activities of Shaastra - Spark and Sampark. Hospitality of guests in Shaastra is another part of the JD and we do take our job very seriously. To see us in action, visit us at Shaastra or a Sampark near your city."
	}];
var list2=[	{
	Person_Name:"Ramprashanth",
	Team_Name:"Evolve",
	Email:"ramprashanth@shaastra.org",
	Phone:"+91 8754443260",
	Person_Name2:"Udith Krishna",
	Email2:"udithkrishna@shaastra.org",
	Phone2:"+91 9551113873",
Description:"Evolve handles 3 important verticals in Shaastra: <a href='#spotlight'>Shaastra Spotlight</a> a.k.a. Shaastra Lecture Series, the <a href='#summit'>Accessibility Summit</a>, and <a href='#solutions'>Shaastra Solutions</a>. If you would like to give a talk at the Lecture series or the summit or would like to associate with Shaastra Solutions as a client or participant, please get in touch with us."
	},

	{
	Person_Name:"Harshit Dohare",
	Team_Name:"Envisage",
	Email:" harshit.dohare@shaastra.org",
	Phone:"+91 9962879064",
	Person_Name2:"Omkar Vanjpe",
	
	Email2:" omkarkvanjpe@shaastra.org",
	Phone2:"+91 7708173059",
Description:"The Envisage team organises Shaastra's unique techno - entertainment show. Though completely organised by students of IIT Madras, it is one of the largest of its kind in India. This team is also responsible for Shaastra's Technical Ambience."
	},
	{
	Person_Name:"Krishi Tata",
	Team_Name:"Finance",
	Email:"krishi@shaastra.org",
	Phone:"+91 9003113121",
	Person_Name2:"L Sai Manish",
	
	Email2:"saimanish@shaastra.org",
	Phone2:"+91 7708481881",
Description:"The department caters to all financial requirements of Shaastra along with the T-shirts and merchandise sale at our fest. For any queries or suggestions, feel free to contact us."
	},
	{
	Person_Name:"Raghul Manosh",
	Team_Name:"Sponsorship & PR",
	Email:"raghul@shaastra.org",
	Phone:"+91 9940246479",
	
	Person_Name2:"Varun Srinivas Sridharan",
	
	Email2:"varun@shaastra.org",
	Phone2:"+91 7358540260",
Description:"The Sponsorship and Public Relations department serves as the bridge between an investor and Shaastra. These assosiciations include both in-kind and monetary deals. The collaborations are also to foster support from media and patrons, thus generating PR . So do contact us for any collaboration which deems suitable, with doors open to any <a target='_blank' href='http://ebrochure.shaastra.org'>industry</a>, NGO, start-up; you name it. Shaastra also look to give back to the society, along with putting the forefronts of technology on a pedestal. Also, make sure you keep an eye out for <b>Shaastra Augment, 2017</b> and the department bringing it to life for you. "
	},{
	Person_Name:"Mohit Kumar",
	Team_Name:"Technical Operations",
	Email:"mohit@shaastra.org",
	Phone:"+91 9003120598",
	
	Person_Name2:"S V Minu Aswanth",
	
	Email2:"minu@shaastra.org",
	Phone2:"+91 9976448668",
Description:"Though their main work is hosted here at shaastra.org, the Technical Operations department manages all the techical nitty gritties of the festival, as the name suggests. Their work includes creating websites for the various wings of Shaastra, building mobile applications, augmented and virtual reality apps, ERPs and many more tools to assist Shaastra in its smooth functioning. "
	},{
	Person_Name:"Manish Dhariwal",
	Team_Name:"QMS",
	Email:"manish.dhariwal@shaastra.org",
	Phone:"+91 9884184032",
	
	Person_Name2:"Gunjan",
	
	Email2:"gunjan@shaastra.org",
	Phone2:"+91 7299559744",
Description:"This department takes care for online and on ground registration systems for Shaastra, passport distribution, quality control, feedback and suggestions. For queries related to the registration process, please get in touch with us. "
	}];
var list3=[{
	Person_Name:"Nivedita Manepalli",
	Team_Name:"Shows and Exhibitions",
	Email:"nivedita.manepalli@shaastra.org",
	Phone:"+91 9940557095",
Description:"The ones behind the entertainment quotient of Shaastra, the Shows & Exhibitions department orchestrates the Professional Shows and the International & National Exhibitions.To exhibit your product at Shaastra, please feel free to get in touch with us."
	},
{
	Person_Name:"Harshit Saxena",
	Team_Name:"Facilities",
	Email:"harshit@shaastra.org",
	Phone:"+91 9789016167",
Description:"This Department caters to all logistics and planning of Shaastra along with the catering and transportation facilities. For any queries or suggestions, feel free to contact us."
	}
	];
