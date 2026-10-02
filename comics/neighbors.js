export function neighborOffset(name,time){
 if(name==='Olena')return Math.sin(time*.4)*8;
 const speed=name==='Mom'?.45:name==='Egor'?.6:name==='Dad'?.3:.55;
 const amplitude=name==='Mom'?180:name==='Egor'?65:name==='Dad'?35:55;
 return Math.max(-1,Math.min(1,Math.sin(time*speed+name.length)*1.3))*amplitude;
}
export function neighborLocation(name,districtX,offset,time,three=false){
 if(name==='Veronika')return {x:three?(9+Math.max(0,Math.min(6,Math.round((districtX/10-9)/130)))*130)*10+neighborOffset(name,time):districtX+450+neighborOffset(name,time),z:three?-430:0};
 if(name==='Josie')return {x:districtX+(three?0:120)+Math.sin(time*(three?.12:.14))*(three?220:270),z:three?50:0};
 return {x:districtX+offset+neighborOffset(name,time),z:three?50:0};
}
