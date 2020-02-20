export default function togglePhone(e) {
  const targetVal = e.target.textContent;
  const ele = document.querySelector("div.phone-values");
  if (targetVal === "Show All") {
    e.target.innerHTML = "Hide All";
  } else {
    e.target.innerHTML = "Show All";
  }
  ele.classList.toggle("show-all");
}
