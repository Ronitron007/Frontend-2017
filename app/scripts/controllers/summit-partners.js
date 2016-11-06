'use strict';

/**
 * @ngdoc function
 * @name frontend2017App.controller:SummitPartnersCtrl
 * @description
 * # SummitPartnersCtrl
 * Controller of the frontend2017App
 */
angular.module('frontend2017App')
  .controller('SummitPartnersCtrl', function ($scope) {
    skrollr.init().destroy();
    
    var imgUrl='../../images/elements/summit/partners';

    $scope.partnersJson=[
    {
    	name:'Accessible India Campaign',
    	info:'A nation-wide campaign started by the Department of Empowerment of Persons with Disability (DEPwD), Government of India, aimed at achieving universal accessibility for Persons with Disabilities (PwDs). The campaign focusses on making physical environments accessible ranging from buildings to transport facilities provided by the government and making information and communication technology accessible for PwDs.',
    	link:'http://www.accessibleindia.gov.in/content',
    	logo:imgUrl+'/Accessible_India_Campaign.jpg',
    },
    {
    	name:'Deque Systems Inc',
    	info:'Deque systems Inc., a company based out of Virginia, USA, working with several Fortune 500 companies on digital accessibility and accessible websites. Integral to its mission of Digital accessibility for all, Deque systems have been working as a consultant to website design of several corporates, government institutions and financial institutions.',
    	link:'http://www.deque.com',
    	logo:imgUrl+'/Deque.png',
    },

     {
    	name:'Centre for Internet and Society (CIS)',
    	info:'The Centre for Internet and Society (CIS) is a non-profit organization that undertakes interdisciplinary research on the internet and digital technologies from policy and academic perspectives. Their areas of focus include digital accessibility for persons with diverse abilities and access to knowledge focusing on research and development in digital accessibility and access to information.',
    	link:'http://www.cis-india.org',
    	logo:imgUrl+'/Centre for Internet and Society.png',
    },
    {
    	name:'EnAble India',
		info:'EnAble India focuses on empowerment of persons with disability and creating employment opportunities for PwDs. EnAble India trains and counsels PwDs and is working towards making PwDs a part of every corporate hiring plan. It focusses on providing supplementary education, extensive training and assistive aids to increase the employability of PwDs.',    	
    	link:'http://www.enable-india.org',
    	logo:imgUrl+'/Enable India.jpg',
    },
    {
    	name:'Ability Foundation',
    	info:'Established in 1995, Ability Foundation works for the empowerment, integration and rights of people with disabilities. With mainstreaming and inclusion as its constant theme, the Foundation has initiated a slew of innovative programmes that aim at the total inclusion of people with disabilities. Ability Foundation works to enable PwDs and provide equal opportunities to suit their varied talents.',
    	link:'http://www.abilityfoundation.org',
    	logo:imgUrl+'/AbilityFoundation.png',
    },
    {
    	name:'Vidhi Centre for Legal Policy',
    	info:'The Vidhi Centre for Legal Policy is a not for profit, independent think tank doing legal research and assisting the government in making better laws. Vidhi is committed to making legal research with the aim of informing public debate and contributing to improved governance. Vidhi works with various ministries of the Government of India and State governments, as well as other public institutions providing legal research.  ',
    	link:'http://www.vidhilegalpolicy.in', 
    	logo:imgUrl+'/Vidhi.jpg',
    },
    {
    	name:'Vidya Sagar',
		info:'Vidya Sagar is a non-government organisation started in 1985 to help bring inclusivity in the society for PwDs. In 2 decades, Vidya Sagar has developed into an institution offering programs that focus on holistic development and education for children and adults with special needs; demystification of disability; empowering persons with special needs and their families with knowledge and skills, while strongly advocating on issues of inclusion. Vidya Sagar today runs several programmes reaching out to over 3800 individuals with disabilities. ',
    	link:'http://www.vidyasagar.co.in',
    	logo:imgUrl+'/Vidya Sagar.png',
    },

    ];
  });
