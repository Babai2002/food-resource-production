document.getElementById('serBtn').addEventListener('click',function(){
    const search = document.getElementById('search').value;
    const value = "#"+search;
    window.location.href = value;
})