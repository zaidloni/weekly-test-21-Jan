let data = [
  {
    question: "What is a dog",
    answer: "Dog is a animal with 4 legs",
    img: "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
  },

  {
    question: "What is a cat",
    answer: "Cat is a cute animal",
    image:
      "https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/",
  },
  {
    question: "What is a crow",
    answer: "Crow is a bird",
    img: "https://www.pexels.com/photo/selective-focus-photograph-of-black-crow-946344/",
  },
];

const btnEl = document.getElementById("btn");
const textAreaEl = document.getElementById("textarea");
const containerEl = document.getElementById("container");

btnEl.addEventListener("click", check);
function check(e) {
  let textareaElVal = textAreaEl.value;

  data.forEach((e) => {
    console.log(e.question);
    if (e.question === textareaElVal) {
      let img = document.createElement("img");
      let p = document.createElement("p");

      p.innerText = e.answer;
      containerEl.append(p);
      //   img.setAttribute("src", e.img);
      img.setAttribute("src", `${e.img}`);
      containerEl.append(img);
      let text = document.createElement("textarea");
      let speakBtn = document.createElement("button");
      speakBtn.innerText = "Speak Button";

      containerEl.append(text, speakBtn);
    }
  });
}
