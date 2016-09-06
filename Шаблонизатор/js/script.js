var i = 0;

var tmpl = document.getElementById('template').innerHTML;

var html = _.template(tmpl)({
        name: "Koloda Sviatoslav Olegovich",
        job: "Future FrontEnd - Developer",
        titles: [
            "I want to learn frontend technology because:",
            "My phone number:",
            "My social networks:",
            "My feedback:"
        ],
        why: [
            "A large field for imagination and creativity",
            "Immediately visible results of my work",
            "Communication in an interesting young team"
        ],
        phone: "+38(099) 309-27-21",
        socials: [
            "Facebook",
            "Linkedin",
            "VK"
        ],
        feedback: "Glad to be part of the GoIT team!!!"
});

document.write(html)
