'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:SummitSpeakersCtrl
 * @description
 * # SummitSpeakersCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('SummitSpeakersCtrl', function ($scope) {
    skrollr.init().destroy();
   var imgUrl='../../images/summit/speakers';
   $scope.speakersJson=[
   {
   	name:'Suranga Nanayakkara',
    description:'Lecture - Technical',
    organisation:'Singapore University of Technology and Design',
    img:imgUrl+'/Suranga_Nanyakara.jpg',
    info:'Suranga Nanayakkara is an Assistant Professor from the Engineering Product Development Pillar at Singapore University of Technology and Design (SUTD). Before joining SUTD, Suranga was a Postdoctoral Associate at the Fluid Interfaces group, MIT Media Lab. In 2011, he founded the "Augmented Human Lab" to explore ways of creating ‘enabling’ human-computer interfaces as natural extensions of our body, mind and behaviour. Suranga is among that rare breed of engineers that has a sense of “humanity” in technology. This ranges from practical behavioral issues, understanding real-life contexts in which technologies function, and understanding where technologies can be not just exciting or novel, but have a meaningful impact on the way people live. For the totality and breadth of achievements, he has won many awards including been recognized as a young inventor under 35 (TR35 award) in the Asia Pacific region by MIT TechReview, Outstanding Young Persons of Sri Lanka (TOYP), and INK Fellow. His work is most important to the people whose lives it most directly impacts: those who face challenged to function in the world due to sensory deficits in hearing or vision.'
   },
   {
    name:'Amba Salelkar',
    description:'Lecture - Policy',
    organisation:'Equals Centre for Promotion of Social Justice',
    img:imgUrl+'/Amba_Salelkar.jpg',
  info:'Amba Salelkar is a lawyer who specializes in law and policy research focused on the inclusion of persons with disabilities. In 2012, she joined the Inclusive Planet Centre for Disability Law and Policy, Chennai, where she began work on advocating for legal harmonization with the UN Convention on the Rights of Persons with Disabilities. In 2014, she was awarded the Chevening Gurukul Fellowship Programme for Leadership and Excellence. She now works with the Equals Centre for Promotion of Social Justice, an organization that focuses on effective law and policy interventions towards the inclusion of persons with disabilities with a focus on stakeholder participation, which was founded in 2014, and is based in Chennai.'  
    },
    {
    name:'George Abraham',
    description:'Lecture - “My Journey”',
    organisation:'Score Foundation',
    img:imgUrl+'/george_abraham.jpg',
    info:'George Abraham, an Ashoka Fellow since 2001, is a social Entrepreneur, inspirational speaker and a master communicator. After completing his post-graduate in Operations Research and graduating in Mathematics from St Stephen’s College, University of Delhi between 1976-81, he worked in Advertising & Sales Promotion at Ogilvy Benson and Mather between 1982-89. He is the Founding Chairman of WBCC (World Blind Cricket Council), who pioneered and organized the first ever World Cup of cricket for the blind at New Delhi 1998, which led him to launch competitive blind cricket in India 1990. He has also co-authored a book on Inclusive Education which was published by Sage Publications. His entrepreneurship journey started when he launched Project Eyeway, a single stop knowledge resource on life with blindness which aimed at bringing together information as well as organisations working with the blind onto a single platform. He was also accredited of conceiving and producing the 13 part TV serial Nazar Ya Nazariya. He has been a recipient of several awards such as Limca Book of Records People of the year 2007, CF Andrews Distinguished Alumni Award (St Stephen’s College) in 2015 and the Sanskriti Award in 1994. He has also had the honour of being the Olympic Torch Relay runner in 1996, being part of Discovery People series on Discovery Channel in 1998 and being a part of Aviva Forward Thinkers Campaign in 2008. He has also given a TedX Talk in 2012 at Bangalore.'
    },
   {
   	name:'Dipendra Manocha',
    description:'Panelist',
    organisation:'DAISY Consortium',
    img:imgUrl+'/Dipendra_Manocha.jpg',
    info:'Dipendra Manocha is the lead of training and technical support at DAISY Consortium. He is the president of the DAISY Forum of India, a network of more than 130 organisations in India serving persons with blindness and low vision, and National Association for the Blind (Delhi branch). An Ashoka fellow (2005) and a Natinal Award winner (2007), he has managed or coordinated several technological development or implementation projects. Some of these include Development of Braille transcriptions and screen reading softwares in Indian languages, Accessible content creation projects and establishment of digital library for persons with blindness, and ICT literacy for persons with blindness and application of technology for work place solution for opening new venues of employment and education for persons with blindness. He worked as a consultant for Delhi University for establishing a resource centre for persons with disability, and as a resource person in a series of workshops on accessible built environment conducted by the Chief Commissioner Disabilities, Govt. of India.'
   },
    {
   	name:'Meenu Bhambhani',
    description:'Panelist',
    organisation:'MphasiS, Bangalore',
    img:imgUrl+'/Meenu_Bhambhani.jpg',
    info:'Dr. Meenu Bhambhani is the Associate Vice-President and Head – Global Corporate Social Responsibility at MphasiS, Bangalore. She is a a professional in the area of disability and human development with more than fifteen years of experience, specialised in disability studies and social policy, a researcher on disability issues in India, and an ally of local and transnational disability rights movements. Having engaged with the development sector in he current role at Mphasis, Ms. Bhambhani has instituted processes to transform policy into action, has extensively trained employees across locations in disability issues and ensured that MphsiS’s systems, including infrastructure, became significantly disabled-friendly. Her efforts have resulted in the company not only becoming a positive recruiter of disabled persons, but also a role model for other corporates. She was felicitated with the prestigious NCPEDP - Shell Helen Keller Award in 2009. Because of her efforts, Mphasis was oneof the winners of the Natioanl Award for the Empowerment of People with Disabilities in 2008.'
   },
    {
   	name:'Rama Chari',
    description:'Panelist',
    organisation:'Diversity and Equal Opportunnities Centre',
    img:imgUrl+'/Rama_Chari.jpg',
	info:'Rama Chari has more than two decades of work experience in the field of disability inclusion and equality, and is the founder-director of Diversity and Equal Opportunity Centre. She has specialised in the area of disability policy and has undertaken several studies on the UN Convention on the Rights of Persons with Disabilities and its application in various aspects. She has developed the disability inclusion framework for employment in the corporate sector which has been recognised nationally and internationally. Ms. Chari led the development of HR Manual, called Values Route to Business Success - The why and How of Employing people with Disabilities in 2007, which was published by Confederation of Indian Industry (CII).  She has developed training modules and conducted several trainings in the area of disability for different stakeholder groups, and is a trusted advisor to many organisations and diversity professionals.'
	   },
    {
    name:'Moses Chowdary',
    description:'Panelist',
    organisation:'Enable India',
    img:imgUrl+'/Moses.jpg',
    info:'With a vision to create inclusive society where every individual realises his/her potential, Moses Chowdary works for the development and transformation of persons with disability. As the program manager for visually impaired trainings and solutions at EnAble India, Moses leads a team of trainers to enable visually impaired in India to gain employment in computer based jobs, gain access to quality education and lead a quality life. He has 6 years experience in enabling visually impaired to gain IT skills, and therefore, in shaping visually impaired role models who can inspire the next generation. He is actively involved in making workplaces inclusive through sensitisation programs for employers. He has conducted sensitisation programmes at companies like IBM, Capgemini, Hindustan Unilever, State Bank of India, etc. and has been instrumental in inspiring a young generation of visually impaired to aspire for computer based jobs through career workshops conducted at different places in India and Mauritius.'
    },
   
   {
   	name:'Nirmita Narasimhan',
    description:'Panel Moderator',
    organisation:'Centre for Internet and Society',
    img:imgUrl+'/Nirmita_Narasimhan.jpg',
    info:'Dr. Nirmita Narasimhan is a Policy Director at CIS and heads the Accessibility and Inclusion Programme. She specialises in policy research and advocacy related to technology access for persons with disabilities and has authored several reports on accessibility used by policymakers worldwide. Apart from her degrees in Law and German, Nirmita is also a PhD holder in classical music. In recognition of her work, she was awarded the National Award for Empowerment of Persons with Disabilities by the President of India in December 2010. She has presented papers on ICT and Accessibility at several international forums like the IGF. Nirmita also serves as the Director, Global Reports, for G3ict.'
	},
	{
    name:'Sujasree Kurapati',
    description:'Panelist',
    organisation:'Deque Software Private Limited(India)',
    img:imgUrl+'/Sujasree_Kurapati.jpg',
    info:'Sujasree Kurapati, Managing Director at Deque Software Private Limited (India), has been working in digital accessibility space for 8 years. As a person with a minor physical disability, she herself experiences and sees the impact of inaccessible physical environments. As a professional with experience in Digital Accessibility, she does know the impact and power of accessible digital space that enables the persons with disabilities to live independently. With the blend of both physical and digital accessibility pragmatics, she dreams for an Accessible India and would like to contribute to the same going forward. She does truly enjoy and is passionate about Accessibility as it is very close to her heart.'
  }
  



   ];

  });
