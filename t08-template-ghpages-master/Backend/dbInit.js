import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Rome"
        }


    ]
    const areaModel = [
        {
            name: "Green",
            description: "The 'Green' workspace refers to a capital venture area focused on environmentally sustainable and socially responsible projects. It encompasses investments and initiatives that aim to promote and support businesses and startups involved in renewable energy, clean technologies, conservation efforts, and other environmentally friendly practices. In the Green workspace, investors and entrepreneurs collaborate to drive positive environmental impact while seeking financial returns. This sector plays a crucial role in advancing sustainability goals and creating a more eco-conscious and greener future.",
            image:"https://www.iberdrola.com/documents/20125/40339/edificios_746x419.jpg/06048f36-7858-67df-9926-893ccace2bf1?t=1627284255061",
            
        },
        {
            name: "Education",
            description: "The 'Education' workspace represents a capital venture area dedicated to investing in and supporting initiatives within the educational sector. It focuses on funding projects and startups that aim to innovate and improve education through technology, curriculum development, learning platforms, and other educational solutions. The Education workspace seeks to drive advancements in teaching methodologies, access to quality education, and lifelong learning opportunities. By investing in this area, capital venture firms contribute to the growth and evolution of education, empowering individuals and societies through knowledge and skills development.",
            image:"https://www.gettingsmart.com/wp-content/uploads/2018/04/Diverse-Students-Working-on-Maps-Project-with-teacher-Feature-Image-1.jpg"
        },
        {
            name: "Health",
            description: "The 'Health' workspace refers to a capital venture area centered around investments in the healthcare industry. It encompasses funding for innovative healthcare solutions, medical technologies, biotech research, pharmaceuticals, digital health platforms, and more. The Health workspace aims to improve patient care, advance medical treatments and therapies, enhance diagnostics, and revolutionize healthcare delivery systems. Capital venture firms in this area seek opportunities to support groundbreaking discoveries, promote better health outcomes, and drive positive impacts on global well-being. Investments in the Health workspace contribute to advancements in medical science, patient-centered care, and overall healthcare ecosystem development.",
            image:"https://media.licdn.com/dms/image/D4D22AQGN1NAxuI6AGQ/feedshare-shrink_800/0/1684154544842?e=1691625600&v=beta&t=-a4mdviFfeovHCw2gGtw7GFiLUqcLHW0AI7wLo1czt8"
        },

    ]
    await models.areas.bulkCreate(areaModel)

    const peopleModel = [
        {
            name: "John",
            education: "PhD",
            expertise: "Math",
            description: "I am a math genius",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image: "https://www.incimages.com/uploaded_files/image/1024x576/getty_481292845_77896.jpg"
            

        },
        {
            name: "Emily",
            education: "PhD",
            expertise: "Engineering",
            description: "I am an engineering expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"
        },
        {
            name: "Liam",
            education: "Master",
            expertise: "Physics",
            description: "I am a physics expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.jpg"
        },
        {
            name: "Noah",
            education: "PhD",
            expertise: "Chemistry",
            description: "I am a chemistry expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg"
        },
        {
            name: "Ethan",
            education: "PhD",
            expertise: "Biology",
            description: "I am a biology expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
        },
        {
            name: "Olivia",
            education: "Master",
            expertise: "Computer Science",
            description: "I am a computer science expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
        },
        {
            name: "Ava",
            education: "PhD",
            expertise: "Economics",
            description: "I am an economics expert with a PhD",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            name: "Benjamim",
            education: "PhD",
            expertise: "Computer Science",
            description: "I am Scientist",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
        },
        {
            name: "Paul",
            education: "Master",
            expertise: "Economics",
            description: "Strong background in economic analysis and market research.",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
        },
        {
            name: "Michele",
            education: "Master",
            expertise: "Physics",
            description: "I love theoretical and experimental physics.",
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1pJgqNGQ7G0o2oaT3CLntytr0M2I8BlyCA&usqp=CAU"
        }
       


        



    ]
    await models.people.bulkCreate(peopleModel)

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])
    /*const area1 = await models.areas.create(areaModel[0])
    const area2 = await models.areas.create(areaModel[1])
    const area3 = await models.areas.create(areaModel[2])
    /*const project1 = await models.projects.create(projectModel[0])
    const project2 = await models.projects.create(projectModel[1])
    const project3 = await models.projects.create(projectModel[2])
    const project4 = await models.projects.create(projectModel[3])
    const project5 = await models.projects.create(projectModel[4])
    const project6 = await models.projects.create(projectModel[5])
    const project7 = await models.projects.create(projectModel[6])
    const project8 = await models.projects.create(projectModel[7])
    const project9 = await models.projects.create(projectModel[8])
    const project10 = await models.projects.create(projectModel[9])
    const project11 = await models.projects.create(projectModel[10])
    const project12 = await models.projects.create(projectModel[11])
    const project13 = await models.projects.create(projectModel[12])
    const project14 = await models.projects.create(projectModel[13])
    const project15 = await models.projects.create(projectModel[14])
  
    const person1 = await models.people.create(peopleModel[0])
    const person2 = await models.people.create(peopleModel[1])
    const person3 = await models.people.create(peopleModel[2])
    const person4 = await models.people.create(peopleModel[3])
    const person5 = await models.people.create(peopleModel[4])
    const person6 = await models.people.create(peopleModel[5])
    const person7 = await models.people.create(peopleModel[6])  */



    const projectModel = [
        {
            name: "WindHarmony",
            subtitle: "Harnessing Wind Power for a Greener Future",
            description: "Development of a state-of-the-art wind farm for clean and renewable energy generation, contributing to the reduction of greenhouse gas emissions and the preservation of the environment.",
            image:"https://knowhow.distrelec.com/wp-content/uploads/2022/07/Wind-turbine_1200x628-1024x536.gif",
            image1:"https://www.centraleverwarmingcv.be/wp-content/uploads/prijs-elektriciteit.jpg",
            image2:"https://handymantips.org/wp-content/uploads/2021/05/Renewable-Energy-Are-They-A-Good-Alternative-For-Businesses.jpg",
            price: 15000,
            areaname1: "Green",
            areaname:"Education",
            people:"Ava"
        },
        {
            name: "Online Learning Hub",
            subtitle: "Accessible and Interactive Educational Resources for All",
            description: "Creation of an online learning platform that provides accessible and interactive educational resources for students of all ages, fostering a lifelong love for learning and promoting.",
            image:"https://www.unicef.org/serbia/sites/unicef.org.serbia/files/styles/hero_desktop/public/photo-1584651766658-1b7b47a2cb79_0.jpg?itok=gfoylGum",
            image1:"https://i.pinimg.com/564x/4b/9b/fc/4b9bfca6fe44121f1b3d581e53f19532.jpg",
            image2:"https://i.pinimg.com/564x/ba/31/35/ba3135a7bc099da230cccf80755cfac0.jpg",
            price: 50000,
            areaname: "Education",
            people:"John"
        },
        {
            name: "ReCycloTech",
            subtitle: "Transforming Waste into Resources for a Circular Economy",
            description: "Implementation of an innovative recycling system that enables the reuse of discarded materials, contributing to waste reduction and promoting a circular economy.",
            image:"https://media.istockphoto.com/id/1352409837/photo/circular-economy-concept-eliminate-waste-and-pollution-sharing-reusing-repairing-renovating.jpg?s=612x612&w=0&k=20&c=ZAZAJeZdoKVO9Br1zJeJAN4nWrSOAEj0ezkUA8-C_nA=",
            image1:"https://i.pinimg.com/564x/49/7d/9c/497d9c6d9ab399774c9e9198bade5e7b.jpg ",
            image2:"https://i.pinimg.com/564x/6e/65/e5/6e65e516a280c0e120f80d7317bb662f.jpg",
            price: 25000,
            areaname: "Green",
            people:"Emily"
        },
        {
            name: "GreenOasis",
            subtitle: "Cultivating Sustainable Communities through Urban Gardens",
            description: "Creation of a community urban garden to encourage the production of organic food, promote sustainable agriculture, and raise awareness about the importance of healthy eating.",
            image:"https://civicwell.org/wp-content/uploads/2013/07/feature-cultivating-community-gardens.jpg",
            image1:"https://i.pinimg.com/564x/17/25/b8/1725b816e29d41d1701b2665d5556f59.jpg",
            image2:"https://i.pinimg.com/236x/b5/c8/3b/b5c83b21369ed3c069dcb27509db2abd.jpg",
            price: 25000,
            areaname1: "Green",
            areaname:"Health",
            people:"Ava"
        },
        {
            name: "EduQuest",
            subtitle: "Gamifying Learning for Engaging Education",
            description: "Development of a mobile application that gamifies the learning process, making education engaging and fun for students, and enhancing their critical thinking and solving skills.",
            image:"https://elearningindustry.com/wp-content/uploads/2017/08/Untitled-design-21.jpg",
            image1:"https://i.pinimg.com/564x/ea/c7/0f/eac70fbe00af16a24b0a94c112b311ca.jpg",
            image2:"https://i.pinimg.com/564x/a0/d8/b8/a0d8b89000c00d4ef9daf22492b02f87.jpg",
            price: 20000,
            areaname: "Education",
            people:"John"
        },
        {
            name: "SolarVitalize",
            subtitle: "Powering Public Buildings with the Suns Energy",
            description: "Installation of solar panels on public buildings for clean and self-sufficient energy generation, reducing dependence on non-renewable sources and promoting the transition.",
            image:"https://www.build-review.com/wp-content/uploads/2021/07/Solar-Energy-Buildings.jpg",
            image1:"https://i.pinimg.com/236x/9a/1b/54/9a1b544cff51f88ba9f287b17f2f122b.jpg",
            image2:"https://i.pinimg.com/236x/37/97/e4/3797e447611a52f7cdd6076da6faea1e.jpg",
            price: 35000,
            areaname: "Green",
            people:"Emily"
        },
        {
            name: "EnergyWise",
            subtitle: "Empowering Homes with Intelligent Energy Management",
            description: "Development of an intelligent energy monitoring and control system for households, allowing users to identify and reduce excessive energy consumption, thereby promoting energy.",
            image:"https://media.istockphoto.com/id/1082036118/photo/future-clean-renewable-or-alternative-energy-for-modern-living-concept-house-model-light-bulb.jpg?s=612x612&w=0&k=20&c=r_My3gw_K1JBq5lVIhaC92HkuinixTPEAk9rFlj6p5Y=",
            image1:"https://i.pinimg.com/564x/c2/ff/c6/c2ffc6dc421f4826c4e17c8bd0e1ba2f.jpg",
            image2:"https://i.pinimg.com/236x/ba/52/e8/ba52e8b3054ce75b2c98a4c689a4bd93.jpg",
            price: 40000,
            areaname: "Green",
            people:"Liam"
        },
        {
            name: "EmpowerED",
            subtitle: "EmpowerED: Scholarships for Equal Access to Quality Education",
            description: "Establishment of a scholarship program to support underprivileged students in accessing quality education, empowering them to overcome barriers and achieve their full potential.",
            image:"https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/In%20Focus/SDGs/photos-2018/04_Education_Guatemala_UNTF_computer_MG_2073_1_675x450.jpg?h=450&w=675",
            image1:"",
            image2:"",
            price: 15000,
            areaname1: "Education",
            areaname:"Health",
            people:"Noah"
        },
        {
            name: "HealthyCommunity",
            subtitle: "Affordable and Comprehensive Healthcare for All",
            description: "Launch of a community health clinic that offers affordable and comprehensive healthcare services, focusing on preventive care, early detection of diseases, and promoting health.",
            image:"https://publichealth.tulane.edu/wp-content/uploads/sites/3/2020/05/blog-healthcare-provider-teachers-toddler-to-brush-teeth.jpg",
            image1:"https://i.pinimg.com/564x/d0/c4/15/d0c415c26c7a6b31315a0acc61b1e1a8.jpg",
            image2:"https://i.pinimg.com/564x/2a/88/d1/2a88d10f66c8c6f2fffece48194ab9c9.jpg",
            price: 35000,
            areaname: "Health",
            people:"Noah"
        },
        {
            name: "ForestRevive",
            subtitle: "Restoring Natures Balance through Reforestation",
            description: "Establishment of a reforestation program in degraded areas, aiming to restore ecosystems, protect biodiversity, and promote carbon sequestration to mitigate climate change.",
            image:"https://ychef.files.bbci.co.uk/976x549/p072bwvx.jpg",
            image1:"https://ychef.files.bbci.co.uk/976x549/p072byxf.jpg",
            image2:"https://ychef.files.bbci.co.uk/live/624x351/p072bwvx.jpg",
            price: 20000,
            areaname: "Green",
            people:"Ethan"

        },
        {
            name: "STEMpire",
            subtitle: "Empowering Students for the Digital Future through STEM Education",
            description: "Implementation of a STEM (Science, Technology, Engineering, and Mathematics) education initiative in schools, equipping students with the necessary skills for the digital age.",
            image:"https://epe.brightspotcdn.com/26/da/d161ce05474e899bdad392635325/african-american-girl-technology.jpg",
            image1:"https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/RVR_-Trigonometry-Sensor-Data_HR-1200x800-5b2df79_800x.jpg?v=1672682753",
            image2:"https://cdn.shopify.com/s/files/1/0306/6419/6141/files/BOLTLifeHR-8527-1200x800-5b2df79_2_600x600.jpg?v=1672683763",
            price: 30000,
            areaname1: "Education",
            areaname:"Health",
            people:"Ava"

        },
        {
            name: "ProjectX",
            subtitle: "Innovative Solutions for a Changing World",
            description: "Development of cutting-edge technology solutions that address the challenges of a rapidly changing world.",
            image:"https://invisibleproject.org/wp-content/uploads/2022/12/iStock-1300524290.jpg",
            image1:"https://future-business.org/wp-content/uploads/2022/09/dreamstime_xxl_181371567-scaled.jpg",
            image2:"https://www.responsiblebusiness.com/wp-content/uploads/2021/06/GFcover2.jpg",
            price: 50000,
            areaname: "Education",
            people:"Ethan"
        },
        {
            name: "GreenSpaces",
            subtitle:"Sustainable Solutions for a Greener Future",
            description: "Design and implementation of sustainable infrastructure and practices to promote environmental conservation and create a greener future.",
            image:"https://8515463.fs1.hubspotusercontent-na1.net/hubfs/8515463/The%20benefits%20of%20green%20spaces%20.jpg",
            image1:"https://images.ctfassets.net/pnliwdxhy0tx/1465x3lEtgt2gZUuD8aRnm/4d3863ffc38a5e3c43a6d9640128ba0b/green_spaces_3.jpg",
            image2:"https://c4.wallpaperflare.com/wallpaper/889/609/266/green-landscape-natural-parks-wallpaper-preview.jpg",
            price: 35000,
            areaname: "Green",
            people:"Ava"
        },
        {
            name: "HealthTrack",
            subtitle: "Personalized Health Recommendations at Your Fingertips",
            description: "Development of a mobile application that provides personalized health recommendations and tracks individual wellness goals, empowering individuals to take control of their health.",
            image:"https://st3.depositphotos.com/1026266/18055/i/600/depositphotos_180556336-stock-photo-medical-tracker-with-smartwatch.jpg",
            image1:"https://img.freepik.com/free-photo/young-attractive-slim-woman-doing-sport-exercises-morning-sunrise-beach-sports-wear-healthy-lifestyle-listening-music-wireless-earphones-holding-smartphone-smiling-happy-having-fun_285396-5550.jpg?w=2000",
            image2:"https://cdn.dribbble.com/userupload/6109657/file/original-2627c7a91f10b1c4d5cc8fefc99f888e.png",
            price: 25000,
            areaname: "Health",
            people:"Oliva"
        },
        {
            name: "TechHub",
            subtitle: "Connecting Tech Enthusiasts and Innovators",
            description: "Creation of an online platform that connects technology enthusiasts, entrepreneurs, and innovators to foster collaboration and knowledge sharing.",
            image:"https://media.istockphoto.com/id/1421207273/photo/business-women-use-cloud-network-technology-to-communicate-and-connect-data-servers-around.webp?b=1&s=170667a&w=0&k=20&c=mNuk5eOHBjSQ_xPx3YcgVBk9I-y_pFtLZyvpCPCi8w8=",
            image1:"https://media.istockphoto.com/id/962404026/photo/corridor-of-server-room-with-server-racks-in-datacenter-3d-illustration.jpg?s=612x612&w=0&k=20&c=eomcmDXMrvzPy8cIsSO8CNxZgeAksYKVjL-ftDSsyX4=",
            image2:"https://media.istockphoto.com/id/1236683566/photo/digital-data-network-connections-with-icon-of-global-communication-high-speed-connection-data.webp?b=1&s=170667a&w=0&k=20&c=z_s6ZSg3KUGEytVosBfrvb8BUj0pjGMsHYsHe7q-aNY=",
            price: 25000,
            areaname: "Education",
            people:"Benjamim"
        },

    ]
    await models.projects.bulkCreate(projectModel)

    


}
