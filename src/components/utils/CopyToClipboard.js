export default function copyToClipboard(e) {
    const myEle = e.target.parentElement.parentElement;
    const parent = myEle.parentElement;
    const textEle = parent.getElementsByClassName('field-value');
    const textToCopy = textEle[0].textContent;
    const inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = textToCopy;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}
