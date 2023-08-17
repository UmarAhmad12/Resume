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

document.body.appendChild(div);