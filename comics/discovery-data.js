export const CHESS_PUZZLES=[
 {name:'The queen and her teammate',fen:'7k/8/5KQ1/8/8/8/8/8 w - - 0 1',hint:'Your king can protect the queen when she steps close.',explain:'The queen checks the king and covers escape squares. Your king protects her, so the black king cannot capture her.'},
 {name:'A back-rank surprise',fen:'6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1',hint:'The pawns block the king’s escape. Can the rook reach the eighth rank?',explain:'The rook controls the eighth rank. Black’s own pawns block the king from escaping to the seventh rank.'},
 {name:'Teamwork with a rook',fen:'6k1/8/6K1/8/8/8/8/R7 w - - 0 1',hint:'Your king guards f7, g7 and h7. Let the rook guard the back rank.',explain:'The rook checks along the eighth rank while your king covers the escape squares on the seventh rank.'}
];
export function flight(angle,gravity,speed=10){const a=angle*Math.PI/180,vx=speed*Math.cos(a),vy=speed*Math.sin(a),duration=2*vy/gravity;return {vx,vy,duration,range:vx*duration,height:vy*vy/(2*gravity)};}
export function positionAt(t,angle,gravity,speed=10){const p=flight(angle,gravity,speed);return {x:p.vx*t,y:Math.max(0,p.vy*t-gravity*t*t/2)};}
export function lightColor(r,g,b){return `rgb(${r}, ${g}, ${b})`;}
