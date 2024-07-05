document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('left-profile-panel');
    const skillsbutton = document.getElementById('digital-skills-collapse');
    const divFiller = document.getElementById("toggle-fill");
    
    var isTop = false;

    skillsbutton.onclick = adjustSidebar;

    window.addEventListener('scroll', adjustSidebar);
    window.addEventListener('resize', adjustSidebar);

    function adjustSidebar() {
        const sidebarRect = sidebar.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sidebarOffsetBot = sidebar.clientHeight + sidebar.offsetTop;
        
        console.log(sidebarRect.bottom + " " + viewportHeight + isTop);

        if(sidebar.style.position == "absolute"){
    
            
            if(sidebarOffsetBot > sidebar.parentElement.offsetHeight){

            }


            if(sidebarRect.bottom < viewportHeight){
                sidebar.style.position = '-webkit-sticky';
                sidebar.style.position = 'sticky';
                sidebar.style.top = 'auto';
                sidebar.style.bottom = '0';
    
                divFiller.style.height = "100%";
                isTop = false;
            }
            else if(sidebarRect.top > 75){
                sidebar.style.position = '-webkit-sticky';
                sidebar.style.position = 'sticky';
                sidebar.style.top = '75px';
                sidebar.style.bottom = 'auto';
                isTop = true;
                divFiller.style.height = "0";
            }
        }
        else {   
            
            var a = sidebar.offsetTop
            console.log("sidebarOffsetBot = " + sidebar.offsetTop);
            console.log("sidebarOffsetTop = " + sidebarOffsetBot);
            console.log("sidebar.parentElement.offsetHeight = " + sidebar.parentElement.offsetHeight);
            
            
                if (sidebar.offsetTop <= 75){

                }
                else if(sidebarOffsetBot <= 0){
                    sidebar.style.position = '-webkit-sticky';
                    sidebar.style.position = 'sticky';
                    sidebar.style.top = '75px';
                    sidebar.style.bottom = 'auto';
                    isTop = true;
                    divFiller.style.height = "0";
                }

                if(sidebarRect.bottom > viewportHeight){
                    sidebar.style.position = "absolute";
                    sidebar.style.top = a.toString() + "px";
                    console.log(sidebarRect.bottom + " " + viewportHeight + " " + a);
        
                    divFiller.style.height = "0";
                }
            
                else if(sidebarRect.top < 75){
                    sidebar.style.position = "absolute";
                    sidebar.style.top = a.toString() + "px";
                    console.log(sidebarRect.bottom + " " + viewportHeight + " " + a);
        
                    divFiller.style.height = "0";
                }  
        
            
            
        }
        
    }
});

