const insertPara = () => {
	const paragraph = document.createElement("p");
	paragraph.textContent = "Hello.";
	document.body.appendChild(paragraph);
};

export default insertPara;
