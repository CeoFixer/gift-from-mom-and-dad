export function setupSkate({hero,isActive,toast}){
 hero.skating=false;const button=document.createElement('button');button.id='skateButton';button.textContent='Skateboard · K';button.setAttribute('aria-pressed','false');document.getElementById('hud').append(button);
 function toggle(){if(!isActive())return;hero.skating=!hero.skating;button.setAttribute('aria-pressed',String(hero.skating));button.textContent=hero.skating?'Walk again · K':'Skateboard · K';toast(hero.skating?'Skate on! Use the same movement keys; Space to hop. K to walk again.':'Skate packed away. Back on foot!');}
 button.onclick=toggle;addEventListener('keydown',e=>{if(e.code==='KeyK'&&!e.repeat&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))toggle();});
}
