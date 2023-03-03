var typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer","UI Designer", "Freelancer"],
    typeSped:100,
    backSpeed:100,
    backDelay: 2000,
    loop: true
})

function downloadFile(url, fileName){
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };
  document.querySelector('a.btn').onclick =function () {
    downloadFile('Resume.pdf', 'Resume.pdf');
  }