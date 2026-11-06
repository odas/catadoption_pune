(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const products = window.SCRATCHER.products, scene = window.HouseScene;
  const clicks = {pad:'amazon-scratcher-8-pack',sisal:'amazon-sisal-wall-scratcher',couch:'amazon-foodie-couch',game:'amazon-foodie-game',wave:'amazon-emily-wave',lboard:'amazon-fukumaru-l-board',ropemat:'amazon-rope-mat',tv:'amazon-foodie-tv',cafe:'amazon-foodie-meow-bucks',sofa:'amazon-foodie-sofa'};
  let selected = 'cafe', view = 'close', collection = 'cafe';
  let zoom = 1, baseBox, zoomBox, drag, suppressTap = false;
  const returnFocus = new Map();
  const product = id => products.find(p => p.id === id);
  const current = () => product(selected);
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dimensions = p => p.dimensions || [['Width',p.width],['Depth',p.depth === 0 ? 'Flat' : p.depth ?? 'Not supplied'],['Height',p.height]];
  const dimensionLine = p => dimensions(p).map(([name,value]) => name.toLowerCase() + ' ' + value + (typeof value === 'number' ? ' cm' : '')).join(' · ');
  const status = p => p.status === 'owned' ? 'In our house' : 'On my wishlist · not tried yet';
  function fitTargets(container) {
    const svg = container.querySelector('svg'); if (!svg) return;
    const vb = svg.viewBox.baseVal, rect = svg.getBoundingClientRect();
    const unit = Math.min(rect.width / vb.width, rect.height / vb.height); if (!unit) return;
    svg.querySelectorAll('.product-hit').forEach(hit => {
      const d = hit.dataset, x = +d.x, y = +d.y, w = +d.width, h = +d.height;
      const visible = x < vb.x + vb.width && x + w > vb.x && y < vb.y + vb.height && y + h > vb.y;
      hit.parentElement.setAttribute('tabindex',visible ? '0' : '-1');
      hit.parentElement.setAttribute('aria-hidden',String(!visible));
      const tw = Math.max(w,44/unit), th = Math.max(h,44/unit);
      hit.setAttribute('x',x+(w-tw)/2); hit.setAttribute('y',y+(h-th)/2);
      hit.setAttribute('width',tw); hit.setAttribute('height',th);
      const tag=hit.parentElement.querySelector('.tag'),badge=Math.max(9.4,22/unit);
      if(tag){const shape=tag.querySelector('rect'),plus=tag.querySelector('path'),r=badge*.22;
        shape.setAttribute('x',-badge/2);shape.setAttribute('y',-badge/2);shape.setAttribute('width',badge);shape.setAttribute('height',badge);shape.setAttribute('rx',badge*.18);shape.setAttribute('stroke-width',1.5/unit);
        plus.setAttribute('d',`M${-r} 0H${r}M0 ${-r}V${r}`);plus.setAttribute('stroke-width',1.7/unit);
      }
    });
  }
  function renderPicker() {
    $('product-picker').innerHTML = products.map(p => `<button class="pick" data-select="${p.id}" aria-pressed="${p.id===selected}" aria-label="Choose ${p.shortName}, ${status(p)}"><img src="${scene.asset(p)}" alt="" width="130" height="70"><strong>${p.shortName}</strong><small class="${p.status}">${p.status==='owned'?'✓ In our house':'♡ On my wishlist'}</small></button>`).join('');
  }
  function render() {
    const p = current(), room = scene.room(selected,view,collection);
    $('room-container').innerHTML = room.svg;
    $('room-container').style.aspectRatio = room.viewBox[2] + '/' + room.viewBox[3];
    $('scene-caption').textContent = view === 'room' ? 'Eevee on the bed; Growlithe on the floor. Queen mattress: 152 × 198 cm.' : room.caption;
    $('product-name').textContent = p.name;
    $('product-status').textContent = status(p);
    $('product-status').className = 'product-status ' + p.status;
    $('product-dimensions').textContent = dimensionLine(p);
    $('product-image').src = scene.asset(p); $('product-image').alt = 'Illustration of ' + p.shortName;
    $('product-note').textContent = p.id==='pad' ? 'One pad shown. The link is for a pack of eight.' : p.id==='lboard' ? 'Upright board with a 42 cm floor section. I haven’t tried this one.' : p.note;
    $('amazon-button').href = 'https://www.amazon.in/dp/' + p.asin + '?tag=catadoption0b-21';
    $('amazon-button').dataset.goatcounterClick = 'aff/cats-house/' + clicks[p.id];
    $('amazon-button').setAttribute('aria-label','Buy ' + p.productTitle + ' on Amazon, opens a new tab');
    $('watch-product').hidden = !p.realFootage;
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
    document.querySelectorAll('[data-collection]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.collection===collection)));
    document.querySelectorAll('.pick').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.select===selected)));
    $('selection-status').textContent = p.shortName + '. ' + status(p) + '. ' + dimensionLine(p);
    fitTargets($('room-container'));
  }
  function choose(id,push=true) {
    if (!product(id)) return;
    selected=id; render();
    if (push) history.pushState({house:true,selected,view,collection},'', '#' + id);
  }
  function fromLocation() {
    const id=location.hash.slice(1);
    selected=product(id) ? id : 'cafe';
    collection=['tv','sofa'].includes(selected)?'lounge':current().status==='owned'?'everyday':'cafe';
    view='close'; render();
  }
  function openDialog(id) { returnFocus.set(id,document.activeElement); $(id).showModal(); }
  for (const id of ['compare-dialog','large-dialog']) $(id).addEventListener('close',()=>returnFocus.get(id)?.focus({preventScroll:true}));
  function renderCompare() {
    const a=product($('compare-a').value), b=product($('compare-b').value);
    $('compare-stage').innerHTML=scene.compare(a.id,b.id);
    $('compare-labels').innerHTML='<div><strong>Growlithe</strong><small>Our smaller cat</small></div>'+[a,b].map(p=>`<div><strong>${p.shortName}</strong><small>${status(p)}</small><small>${dimensionLine(p)}</small></div>`).join('');
  }
  for (const id of ['compare-a','compare-b']) {
    $(id).innerHTML=products.map(p=>`<option value="${p.id}">${p.shortName}</option>`).join('');
    $(id).addEventListener('change',renderCompare);
  }
  $('compare-open').addEventListener('click',()=>{
    $('compare-a').value=selected;
    $('compare-b').value=selected==='pad'?'cafe':'pad';
    renderCompare(); openDialog('compare-dialog');
  });
  function setZoomBox() {
    $('large-stage').querySelector('svg').setAttribute('viewBox',zoomBox.join(' '));
    $('zoom-label').textContent=zoom.toFixed(1)+'×';
    $('zoom-out').disabled=zoom<=1; $('zoom-in').disabled=zoom>=3;
    fitTargets($('large-stage'));
  }
  function changeZoom(value) {
    zoom=Math.max(1,Math.min(3,value));
    const cx=zoomBox[0]+zoomBox[2]/2,cy=zoomBox[1]+zoomBox[3]/2;
    zoomBox=zoom===1?[...baseBox]:[cx-baseBox[2]/zoom/2,cy-baseBox[3]/zoom/2,baseBox[2]/zoom,baseBox[3]/zoom];
    setZoomBox();
  }
  $('enlarge').addEventListener('click',()=>{
    const room=scene.room(selected,view,collection); $('large-stage').innerHTML=room.svg;
    $('large-product-info').textContent=current().shortName+' · '+status(current())+' · '+dimensionLine(current());
    baseBox=[...room.viewBox]; zoomBox=[...baseBox]; zoom=1;
    openDialog('large-dialog'); setZoomBox();
  });
  $('zoom-in').addEventListener('click',()=>changeZoom(zoom+.5));
  $('zoom-out').addEventListener('click',()=>changeZoom(zoom-.5));
  $('zoom-reset').addEventListener('click',()=>{zoom=1;zoomBox=[...baseBox];setZoomBox();});
  const stage=$('large-stage');
  stage.addEventListener('pointerdown',e=>{
    if (e.button!==0 || zoom===1) return;
    const matrix=stage.querySelector('svg').getScreenCTM(); if(!matrix?.a) return;
    drag={x:e.clientX,y:e.clientY,box:[...zoomBox],unit:matrix.a,pointer:e.pointerId,moved:false};
  });
  stage.addEventListener('pointermove',e=>{
    if(!drag || drag.pointer!==e.pointerId) return;
    const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(Math.hypot(dx,dy)>6) {
      drag.moved=true; suppressTap=true; stage.setPointerCapture(e.pointerId); stage.classList.add('dragging');
      zoomBox[0]=Math.max(0,Math.min(400-zoomBox[2],drag.box[0]-dx/drag.unit));
      zoomBox[1]=Math.max(0,Math.min(325-zoomBox[3],drag.box[1]-dy/drag.unit)); setZoomBox();
    }
  });
  function endDrag(e) {
    if(!drag) return;
    stage.classList.remove('dragging');
    if(stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
    drag=null; setTimeout(()=>{suppressTap=false;},0);
  }
  stage.addEventListener('pointerup',endDrag); stage.addEventListener('pointercancel',endDrag);
  document.addEventListener('click',e=>{
    const close=e.target.closest('[data-close]'); if(close){$(close.dataset.close).close();return;}
    const arrangement=e.target.closest('[data-collection]');
    if(arrangement){collection=arrangement.dataset.collection;view='close';choose({cafe:'cafe',lounge:'sofa',everyday:'pad'}[collection]);return;}
    const viewButton=e.target.closest('[data-view]');
    if(viewButton){view=viewButton.dataset.view;render();history.replaceState({house:true,selected,view,collection},'');return;}
    const item=e.target.closest('[data-select],[data-product]');
    if(item){
      if(suppressTap)return;
      const wasLarge=!!item.closest('#large-stage'),wasScene=item.classList.contains('room-product');
      choose(item.dataset.select||item.dataset.product);
      if(wasLarge) $('large-dialog').close();
      else if(wasScene) $('room-container').querySelector(`[data-product="${selected}"]`)?.focus({preventScroll:true});
      else if(item.closest('.home-clip')) $('house').scrollIntoView({behavior:reduced()?'instant':'smooth',block:'start'});
    }
  });
  document.addEventListener('keydown',e=>{
    if((e.key==='Enter'||e.key===' ')&&e.target.matches('.room-product')){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}
  });
  const videos=[...document.querySelectorAll('video')];
  videos.forEach(video=>video.addEventListener('play',()=>videos.forEach(other=>{if(other!==video)other.pause();})));
  $('watch-product').addEventListener('click',()=>{
    const video=$(selected==='pad'?'flat-video':'sisal-video');
    video.scrollIntoView({behavior:reduced()?'instant':'smooth',block:'center'}); video.focus({preventScroll:true});
    video.play().catch(()=>{$('selection-status').textContent='Press play on the home video to watch.';});
  });
  addEventListener('popstate',e=>{
    if(e.state?.house&&product(e.state.selected)){({selected,view,collection}=e.state);render();}else fromLocation();
  });
  addEventListener('hashchange',()=>{if(location.hash.slice(1)!==selected)fromLocation();});
  new ResizeObserver(()=>fitTargets($('room-container'))).observe($('room-container'));
  renderPicker(); fromLocation(); history.replaceState({house:true,selected,view,collection},'');
})();
