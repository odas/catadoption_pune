/* Creative branch: approved image proportions and 32 px/cm cats are preserved.
   A single camera transforms the room, products and cats together. */
(function(){
const C=window.SCRATCHER, rad=C.cameraDegrees*Math.PI/180;
const projected=(h,d=0)=>h*Math.cos(rad)+(d||0)*Math.sin(rad);
const height=p=>p.artworkHeightCm||projected(p.height,p.depth);
const product=id=>C.products.find(p=>p.id===id);
const asset=p=>p.file.startsWith('data:')?p.file:'assets/scratching/products/'+p.file;
const n=v=>Number(v.toFixed(3));
function cat(id,x,ground){const c=C.cats[id],w=c.widthPx/c.pixelsPerCm,h=c.heightPx/c.pixelsPerCm;return `<image data-cat="${id}" x="${x}" y="${n(ground-c.groundPx/c.pixelsPerCm)}" width="${w}" height="${h}" href="${c.file}" preserveAspectRatio="xMidYMid meet" pointer-events="none"/>`;}
function art(p,x,bottom){const h=height(p);let markup=`<image href="${asset(p)}" x="${x}" y="${n(bottom-h)}" width="${p.width}" height="${n(h)}" preserveAspectRatio="xMidYMid meet" pointer-events="none"/>`;
if(p.id==='cafe')markup+=`<text x="${n(x+p.width*357/714)}" y="${n(bottom-h+h*198.5/596)}" text-anchor="middle" dominant-baseline="central" fill="#365f45" font-family="Georgia,serif" font-size="2.9" font-weight="bold" pointer-events="none">Meow Bucks</text>`;return markup;}
function shadow(p,x,bottom){return `<ellipse cx="${n(x+p.width/2)}" cy="${n(bottom+.3)}" rx="${n(p.width*.47)}" ry="1.2" fill="#292137" opacity=".25"/>`;}
function item(id,x,bottom,selected){const p=product(id),h=height(p),y=bottom-h;return `<g class="room-product" data-product="${id}" role="button" tabindex="0" aria-label="Explore ${p.shortName}, ${p.status==='owned'?'in our house':'on my wishlist'}" aria-pressed="${selected===id}"><rect class="selection-ring" opacity="${selected===id?1:0}" x="${x-1.5}" y="${n(y-1.5)}" width="${p.width+3}" height="${n(h+3)}" rx="2" fill="none" stroke="#fffced" stroke-width=".7"/>${art(p,x,bottom)}<rect class="product-hit" x="${x}" y="${n(y)}" width="${p.width}" height="${n(h)}" data-x="${x}" data-y="${n(y)}" data-width="${p.width}" data-height="${n(h)}" fill="#ffffff" fill-opacity="0" pointer-events="all"/><g class="tag" transform="translate(${n(x+p.width-1)} ${n(y-3)})"><rect class="shop-tag" x="-4.7" y="-4.7" width="9.4" height="9.4" rx="2" fill="${selected===id?'#f8f8a8':'#fffced'}" stroke="#4c3776" stroke-width=".5"/><path d="M-2 0H2M0-2V2" fill="none" stroke="#4c3776" stroke-width=".7" pointer-events="none"/></g></g>`;}
function config(id,collection){
if(id==='pad')return {crop:[119,137,105,70],caption:'Eevee on our cardboard pad · the whole cat, tail included.',name:'Eevee’s everyday spot',ground:285};
if(id==='sisal')return {crop:[0,96,166.5,111],caption:'Eevee, stretching · the sisal pad is fixed to the cupboard.',name:'A proper Eevee stretch',ground:285};
if(id==='ropemat')return {crop:[191.5,79,208.5,139],caption:'Growlithe by the wall · 40 cm mat body, with cord and ball below.',name:'A little purple corner',ground:204};
if(id==='lboard')return {crop:[238,105,147,98],caption:'Growlithe beside the L-board · pictured at the wall. Follow the seller’s fixing instructions.',name:'Somewhere tall to scratch',ground:193};
return {crop:collection==='lounge'&&['tv','sofa'].includes(id)?[220,203,180,120]:[248,220,135,90],caption:'Growlithe for scale · the selected scratcher is beside him.',name:collection==='lounge'?'Their tiny living room':'Growlithe’s corner',ground:285};
}
function room(id='cafe',view='close',collection='cafe'){
const cfg=config(id,collection), vb=view==='room'?[0,0,400,325]:cfg.crop;
const floor=['pad','sisal','ropemat','lboard'].includes(id)?(collection==='everyday'?'couch':'cafe'):id;
const lounge=collection==='lounge'&&['tv','sofa'].includes(id);
let selectedX=lounge?(id==='tv'?346:285):315,selectedBottom=285;
if(id==='lboard'){selectedX=337;selectedBottom=193;}
if(id==='ropemat'){selectedX=315;selectedBottom=176;}

let middle='';
if(lounge&&id==='sofa')middle+=shadow(product('tv'),346,285)+item('tv',346,285,id);
if(lounge&&id==='tv')middle+=`<ellipse cx="311" cy="280" rx="30" ry="11" fill="#fff2c9" opacity=".95"/>`+shadow(product('sofa'),285,285)+item('sofa',285,285,id);
const displayed=['ropemat','lboard'].includes(id)?id:floor;
if(displayed==='sofa'||displayed==='couch')middle+=`<ellipse cx="${selectedX+product(displayed).width/2}" cy="280" rx="${product(displayed).width*.59}" ry="11" fill="#fff2c9" opacity=".96" stroke="#dfc777" stroke-width=".6"/>`;
if(displayed!=='ropemat')middle+=shadow(product(displayed),selectedX,selectedBottom);
middle+=item(displayed,selectedX,selectedBottom,id);
const catX=lounge?225:['lboard','ropemat'].includes(id)?278:255,catGround=cfg.ground;
return {viewBox:vb,caption:cfg.caption,name:cfg.name,svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" role="group" aria-label="The cats’ illustrated house. ${cfg.caption}"><image href="${C.room.file}" x="0" y="0" width="400" height="325" preserveAspectRatio="xMidYMid slice"/>${item('sisal',28,186,id)}<image href="${C.cats.stretch.file}" x="19" y="116" width="32.7" height="78" preserveAspectRatio="xMidYMid meet" pointer-events="none"/>${view==='close'&&id==='sisal'?'':`<ellipse cx="160" cy="195.3" rx="22" ry="1.1" fill="#3d2f54" opacity=".26"/>${item('pad',139,195,id)}${cat('eevee',135,195-product('pad').height*Math.cos(rad)-.6)}`}${middle}<ellipse cx="${catX+24}" cy="${catGround+.4}" rx="20" ry="1" fill="#263d35" opacity=".27"/>${cat('growlithe',catX,catGround)}</svg>`};
}
function compare(a,b){const pa=product(a),pb=product(b),ha=height(pa),hb=height(pb);const catW=C.cats.growlithe.widthPx/32;const wa=Math.max(pa.width,58),wb=Math.max(pb.width,58),gap=12;const w=catW+wa+wb+gap*4,ground=Math.max(ha,hb,36)+16,h=ground+14;const xa=catW+gap*2+(wa-pa.width)/2,xb=catW+wa+gap*3+(wb-pb.width)/2;
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Growlithe beside ${pa.shortName} and ${pb.shortName}, at one illustrated scale"><rect width="${w}" height="${h}" fill="#faf7f0"/><path d="M8 ${ground+1}H${w-8}" stroke="#a6946a" stroke-width=".5"/>${cat('growlithe',gap,ground)}${shadow(pa,xa,ground)}${art(pa,xa,ground)}${shadow(pb,xb,ground)}${art(pb,xb,ground)}</svg>`;
}
window.HouseScene={room,compare,productHeight:height,cat,asset};
})();
