const div = document.createElement('div');
div.className = "info";
div.style.position = "relative"
div.style.paddingInline = "10em"

{
    // name part
    let h1 = document.createElement('h1');
    h1.className = "name";
    let spanName = document.createElement('span');
    spanName.innerText = "Name: ";
    h1.appendChild(spanName);
    h1.appendChild(document.createTextNode("Umar Ahmad"));
    div.appendChild(h1);
}

{
    // Email part
    let h3Email = document.createElement('h3');
    h3Email.classList.add("email", "em");
    let spanEmail = document.createElement('span');
    spanEmail.innerText = "E-mail: ";
    h3Email.appendChild(spanEmail);
    h3Email.appendChild(document.createTextNode("umara6274@gmail.com"))
    div.appendChild(h3Email);
}

{
    // phone number part
    let h3Phone = document.createElement('h3');
    h3Phone.className = "phone";
    let spanPhone = document.createElement('span');
    spanPhone.innerText = "Phone: ";
    h3Phone.appendChild(spanPhone);
    let phoneNumber = "8210707710";
    let phoneNumberToNum = parseInt(phoneNumber);
    h3Phone.appendChild(document.createTextNode(phoneNumberToNum));
    div.appendChild(h3Phone);
}

{
    // address part
    let h3Address = document.createElement('h3');
    h3Address.className = "address";
    let spanAddress = document.createElement('span');
    spanAddress.innerText = "Address: ";
    h3Address.appendChild(spanAddress);
    h3Address.appendChild(document.createTextNode("Millat Market, Main Road, Phulwari Sharif, Patna"));
    div.appendChild(h3Address);
}

{
    //link for LinkdIN
    let linkdInTag = document.createElement("a");
    let target = document.createAttribute("target");
    let linkdInHerf = document.createAttribute("href");
    linkdInHerf.value = "https://www.linkedin.com/in/umar-ahmad-694415222/";
    target.value = "_blank";
    linkdInTag.innerText = "LinkdIn";
    linkdInTag.setAttributeNode(linkdInHerf);
    linkdInTag.setAttributeNode(target);
    div.appendChild(linkdInTag);
}

{
    //link for gitHub
    let gitHubTag = document.createElement("a");
    let target = document.createAttribute("target");
    let gitHubHerf = document.createAttribute("href");
    gitHubHerf.value = "https://github.com/UmarAhmad12";
    target.value = "_blank";
    gitHubTag.innerText = "Github";
    gitHubTag.setAttributeNode(gitHubHerf);
    gitHubTag.setAttributeNode(target);
    div.appendChild(gitHubTag);
    gitHubTag.style.marginLeft = "20px";
}

{
    // profile 
    let img = document.createElement("img");
    let src = document.createAttribute("src");
    src.value = "./Umar1.jpg";
    img.setAttributeNode(src);
    img.style.width = "20%";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "80%";
    img.style.borderRadius = "50%"
    img.style.width = "180px";
    img.style.height = "180px";
    img.style.objectFit = "cover";
    div.appendChild(img);
}

{
    let hr = document.createElement('hr');
    div.appendChild(hr)
}

{
    let profile = document.createElement("div");
    profile.className = "profile";
    let text = document.createElement("p");
    let about = "I want to enhance and practically apply my skills while working in a dynamic and visionary environment, and strive for as much possible perfection in the field of Computer Science.";
    let spanProfile = document.createElement("span");
    spanProfile.innerText = "Profile: ";
    text.appendChild(spanProfile)
    text.appendChild(document.createTextNode(about));
    profile.appendChild(text)
    div.appendChild(profile);
}

{
    let hr = document.createElement('hr');
    div.appendChild(hr)
}

{
    // Education

    let education = document.createElement("div");
    let title = document.createElement("p")
    let eduInfo = document.createElement("p");
    let collegeName = document.createElement("p");
    title.innerText = "Education:";
    eduInfo.innerText = "Maulana Azad College of Engineering & Technology, Neoraganj, Neora, Patna";
    collegeName.innerText = "B.Tech in Mechanical Engineering (2018-2022)";
    education.appendChild(title);
    education.appendChild(eduInfo);
    education.appendChild(collegeName);
    div.appendChild(education)

    // css style
    title.style.fontSize = "1.5em";
    title.style.fontWeight = "bold";
}

{
    let hr = document.createElement('hr');
    div.appendChild(hr)
}

{
    //skills

    let skillArr = ["HTML5", "CSS3", "JavaScript", "Node.js", "React.js", "DSA", { Database: ["mySQL", 'MongoDB'] }]
    let skillBox = document.createElement("div");
    let title = document.createElement("p");
    let list = document.createElement("ul");
    skillArr.map((value) => {
        let li = document.createElement("li");
        let textNode;

        if (typeof value === "object") {
            for (let key in value) {
                if (Array.isArray(value[key])) {
                    let dataList = value[key].join(',');
                    textNode = document.createTextNode(`${key}: ${dataList}`)
                } else {
                    textNode = document.createTextNode(`${key}: ${value[key]}`)
                }
                li.appendChild(textNode);
            }
        } else {
            textNode = document.createTextNode(value);
            li.appendChild(textNode);
        }
        list.appendChild(li);

    });
    title.innerText = "Skills:";
    skillBox.appendChild(title)
    skillBox.appendChild(list);
    div.appendChild(skillBox);

    // css 
    title.style.fontSize = "1.5em";
    title.style.fontWeight = "bold";

}

{
    let hr = document.createElement('hr');
    div.appendChild(hr)
}

{
    //project section

    let projectName = ["Blog Application", "Movie search Application." ];
    // let projectLink = ["https://thunderous-bubblegum-72e37e.netlify.app/", "https://animated-salamander-721492.netlify.app/"];
    let gitRepoLink = [
        "https://github.com/UmarAhmad12/Milestone-2-Assignments/tree/main/Project-1-Blog-App",
        "https://github.com/UmarAhmad12/Milestone-2-Assignments/tree/main/Project-2-Movie-Search-Web-App"
    ];
    let projectBox = document.createElement('div');
    let title = document.createElement("p");
    title.innerText = "Projects:";
    let infoList = document.createElement("ul");

    let projectInfo1 = {
        element: ["HTML5", "CSS3", "JavaScript"],
        achievement: "Able to understand the uses of HTML, CSS and Js",
        gitRepo: gitRepoLink[0]
    };

    let projectInfo2 = {
        element: ["HTML, CSS, JavaScript and OMDB API"],
        achievement: "Increased clear understanding about OMDB API",
        gitRepo: gitRepoLink[1]
    };

    projectName.map((value, idx) => {
        let li = document.createElement('li');
        let aTag = document.createElement("h4");

        aTag.innerText = projectName[idx];
        li.appendChild(aTag);

        // Add project information to the list item
        let projectInfo;
        if (idx === 0) {
            projectInfo = projectInfo1;
        } else if (idx === 1) {
            projectInfo = projectInfo2;
        }

        let infoParagraph = document.createElement("p");
        let elementsText = `Elements: ${Array.isArray(projectInfo.element) ? projectInfo.element.join(", ") : ""}`;
        let achievementText = `Achievements: ${projectInfo.achievement}`;
        let gitLink = document.createElement("a");
        gitLink.innerText = "GitHub Repo";
        gitLink.href = projectInfo.gitRepo;
        gitLink.target = "_blank";

        infoParagraph.innerText = `${elementsText}\n${achievementText}\n`;
        infoParagraph.appendChild(gitLink);
        li.appendChild(infoParagraph);

        infoList.appendChild(li);

        // css
        title.style.fontSize = "1.5em";
        title.style.fontWeight = "bold"
    });

    projectBox.appendChild(title);
    projectBox.appendChild(infoList);
    div.appendChild(projectBox);

}

{
    let hr = document.createElement('hr');
    div.appendChild(hr)
}

document.body.appendChild(div);