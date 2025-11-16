function toggleChapters() {
  const sidebar = document.getElementById('chapters_list');
  const sidebarRight = document.getElementById('rules_list');
  const main = document.getElementById('main_section');

//    Toggle the 'hidden' class
if(!sidebar.classList.contains('hidden')){
    main.classList.add('mobile_sidebar_active');
}else{
    main.classList.remove('mobile_sidebar_active');
};

  sidebar.classList.toggle('hidden');
  main.classList.toggle('mobile_sidebar_active');
  sidebarRight.classList.add('hidden');

}



function toggleRules() {
  const sidebar = document.getElementById('chapters_list');
  const sidebarRight = document.getElementById('rules_list');
  const main = document.getElementById('main_section');

//    Toggle the 'hidden' class
if(!sidebarRight.classList.contains('hidden')){
    main.classList.add('mobile_sidebar_active');
}else{
    main.classList.remove('mobile_sidebar_active');
};
  sidebarRight.classList.toggle('hidden');
   main.classList.toggle('mobile_sidebar_active');
  sidebar.classList.add('hidden');

}

function clearSidebars() {
  const sidebar = document.getElementById('chapters_list');
  const sidebarRight = document.getElementById('rules_list');
  const main = document.getElementById('main_section');

//    Toggle the 'hidden' class
  sidebarRight.classList.add('hidden');
  sidebar.classList.add('hidden');
    main.classList.remove('mobile_sidebar_active');
}



// let chapterIcon = document.getElementById('overlay_chapters');

// let element = document.getElementById('chapters_list');

// chapterIcon.addEventListener('click',function(){

//   Toggle the 'hidden' class
// element.classList.toggle('hidden');

// },false);