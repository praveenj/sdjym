var app = {

	init: function() {
		console.log('app.init');
		var hash = window.location.hash.replace(/^.*?#/,'');

		$('.app-menu a').on('click', app.menus);

	},

	getPosts: function() {
		console.log('app.getPosts');
		var rootURL = 'http://www.wp4.dev/wp-json';

		$.ajax({
			type: 'GET',
			url: rootURL + '/posts?type=news',
			dataType: 'json',
			success: function(data){
				$.each(data, function(index, value) {
			      $('ul.topcoat-list').append('<li class="topcoat-list__item">' +
			      	'<a class="view-link" href="#'+value.ID+'">' +
			      	'<img src="'+value.featured_image.attachment_meta.sizes.medium.url+'" /></a><br>' +
			      	'<h3>'+value.title+'</h3>' +
			      	'<p>'+value.excerpt+'</p></li>');
			    });
			},
			error: function(error){
				console.log(error);
			}

		});

	},
	video: function() {
		console.log('in video function');
		            $(document).ready(function(){
                $("ul.youtube-videogallery").youtubeVideoGallery( {apiFallbackUrl: 'https://www.youtube.com/results?search_query=sdjym',
        apiUrl: 'https://gdata.youtube.com/feeds/api/playlists/PLj_m45CFFM8mPZOVNpuhjBtPW0niKQvBU?start-index=1&alt=json&v=2',plugin:'colorbox'} );
 //               $("ul.youtube-videogallery").youtubeVideoGallery( {urlEmbed: 'http://www.youtube.com/embed/videoseries?list=PL-yWfPlk9tNnzfd0-SN5mLWuFllprNpLK',plugin:'colorbox'} );
            });
	},
	gallery: function() {
		console.log('gotingallery');
		$(document).ready(function () {
                     jQuery("#nanogallery4").nanoGallery({userID:'129835201@N06',kind:'flickr',thumbnailWidth:'auto',thumbnailHeight:160,  //110,
		        viewerDisplayLogo:true,
		        locationHash:true,
        //photoset:'none',//'72157594299597591',
                                //thumbnailDisplayInterval:0,
                                //thumbnailDisplayTransition:false,
                                thumbnailHoverEffect:[{'name':'labelSlideUp','duration':300},{'name':'borderDarker'}],
                                //thumbnailLabel:{display:true,position:'onBottom',descriptionMaxLength:200},
                                thumbnailLabel:{display:true,position:'overImageOnBottom',descriptionMaxLength:50},
		        touchAnimation:true,
		        touchAutoOpenDelay:-1,
		        thumbnailGutterWidth:10,
		        thumbnailGutterHeight:10,
		        thumbnailLazyLoad:true,
		        theme:'clean',
		        colorScheme:'darkRed',
		        slideshowDelay:1000, //default:3000
		        viewerToolbar: {display:false}, //default:true
		        level1: { thumbnailWidth: 200, thumbnailHeight: 120 }
                        });
			console.log('galleryready');
                 });
		console.log('shoudgallery');
	},

	getSinglePost: function(postID) {
		console.log('getSinglePost');

		var rootURL = 'http://www.wp4.dev/wp-json';

		$.ajax({
			type: 'GET',
			url: rootURL + '/posts/' + postID,
			dataType: 'json',
			success: function(data){
				console.log(data);
				$('.single-post .title').append(data.title);
				$('.single-post .content').append(data.content);

			},
			error: function(error){
				console.log(error);
			}

		});

	},
	route: function(event) {
		console.log('hash changed');
		var homePage =
'<div id="container" style="margin: auto;max-width:602px;overflow:scroll">' +
'<div class="span10">' +
'<div style="font-size: 14px;font-family: open sans, arial, san-serif;line-height: 1.7;float : left; text-align : justify;color: #781414;">' +
'<h4>Welcome To Shree Dhandhar Jain Yuwa Manch . . </h4>' +
'' +
'<p>Shree Dhandhar Jain Yuwa Manch was established on 17 nov 2006 under the presence or more than 100 members at Shri Adinath Jain Bhojanshala Bangalore and the first elections  was held on 19 Nov 2006,with the formation of karyakarni Committeee.</p>' +
'' +
'<p>Mr Devichand Shrishrimal was elected as the first president of the SDJYM.' +
'' +
'The first Sneha Milan of Shree Dhandhar Jain Sangh was held in 2007,with the start of service of SDJYM SMS.' +
'' +
'The service of Address directory also was started and it has been a cap in the achievements of the SDJYM. It creates a platform and helds all the people of the community in a single platform.' +
'' +
'SDJYM Regularly conducts Cricket tournaments, Jeevdaya manavatachikitsa, educational assistance,and In 2008 under Indian sanskriti a program named “ MAA baapne ne Bulsho Nahi “ was also organized with a capacity of more than 4000 people and it was one of the greatest event organized under SDJYM.</p>' +
'' +
'' +
'' +
'<p>SDJYM also conducts blood donation camps, Free eye checkup camps regularly and to its achievements in 2014 SDJYM collected more that 210 litres of blood voluntarily among the members' +
'' +
'SDJYM Address sticker copy has been appreciated by all the members as it helps to get all the details of the Dhandhar community .</p>' +
'' +
'' +
'' +
'<p>The SDJYM has embarked a name in itself for the services provided in Bakra Road ( Dhandhar Rajasthan ) and was always ahead in providing reliefs works during flood situations in Karnataka.</p>' +
'' +
'<p>The next President elected was Mr Kushalraj Katariya Sanghvi.</p>' +
'' +
'<p>The Next Elected president was Mr Prakash Gandhi Mutha.' +
'' +
'The complete SDJYM team worked day and night during the pratishta of shree Adinath Jain Mandir , Chickpet and it helped in the growth of SDJYM.</p>' +
'' +
'' +
'' +
'' +
'' +
'<p>For the first time in History of Karnataka SDJYM organized “ Karnataka shree Dhandhar Jain Pravasi Sangh “ ka Sneh Milan with an attendance of more than 2600 members.</p>' +
'' +
'' +
'' +
'' +
'' +
'<p>To Build a good relationship among the members of the community every year “Kshamapana Sabha “ is conducted where all the members existing Committeee and ex Committeee members Gather behaviour conducted.' +
'' +
'Inorder to build strong relationships between Dhandhar and Diyawat , SDJYM organized Dhandhar Diyawat cricket cup . This has been a good effort to build strong and healthy relationships between two communities.' +
'' +
'</p>' +
'' +
'<p>The Fourth President elected was Nemichand Bhansali.</p><p>The members of SDJYM took it as an challenge and delivered Moksh Vahini which was a demand for long time. From Time to time the SDJYM team provides its assistance Varghoda vyavastha , Bhojan Vyavastha, and many social service activities.' +
'' +
'SDJYM conducts Dhandhar Sneh Milan, Dhandhar Sammelan every year .' +
'' +
'The SDJYM conducts elections every year and appoints 36 karyakarini members also known as KK Committeee, with11 padhadikaris,plus Manavata Committeee & Jeevdaya Committeee also.' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'Currently there are 200 members in SDJYM .</p>' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'' +
'</div> </div></div><!--/container end--> '; 

		var singlePost =
		    '<div><article class="single-post">' +
		    '<a class="topcoat-button" href="#">Back</a>' +
		    '<h2 class="title"></h2>' +
		    '<div class="content"></div>' +
		    '</article></div>';

		var galleryPage =
	                '<div id="nanogallery4" style="margin:auto;max-width:600px;overflow:scroll;"></div>';
		var videopage = 
			'<div id="videopage" style="margin:auto;max-width:600px;overflow:scroll;">' +
    			'<ul class="youtube-videogallery">' +
    			'</ul>' +
			'</div>';
		var page,
        hash = window.location.hash;
        console.log('real hash is ' + hash);

        /* If the hash is sample, show the samplePage. If it's anything else, load the singlePost view, otherwise it's the homePage */
	if  (hash == '#gallery') {
	       	console.log('hash is gallery' + hash);
		page = galleryPage;
   		slider.slidePage($(page));
app.init();
//		 $(document).trigger('docAndHeadJSReady');
		app.gallery();
	}
	else if (hash == '#videos') {
		console.log('hash is video' + hash);
		page = videopage;
   		slider.slidePage($(page));
		app.video();
	}	
        else if (hash.match(/nanogallery/)) {
        	console.log('hash match gallery' + hash);
    		app.init();
//		page = galleryPage;
 //  		slider.slidePage($(page));
//		initializationFunction(jQuery);
//		app.gallery();
//		 $(document).trigger('docAndHeadJSReady');
        	console.log('trigger sent');
	}
	else if(hash.match(/video/)) {
        	console.log('hash match video' + hash);
        } else {
        	console.log('home page');
    		page = homePage;
    		app.init();
    		slider.slidePage($(page));
    	}
	console.log('going to slide to ' + page);
	
	},

	menus: function(event) {

		// Close the slide panel if a menu button is clicked
		$('.js-app-container').removeClass('slideIn').addClass('slideOut');

	}

}
//$( document ).delegate("#container", "pageinit", function() {
//  console('A page with an id of "aboutPage" was just created by jQuery Mobile!');
//});
//$( document ).delegate("#nanogallery4", "pageinit", function() {
 // console('A page with an id of "aboutPage" was just created by jQuery Mobile!');
//});
var slider = new PageSlider($("#container"));

$(window).on('hashchange', app.route);

app.route();
