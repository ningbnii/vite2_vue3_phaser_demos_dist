import"./vue.9129f2fd.js";import{p as r}from"./phaser.752ecb3b.js";import{_ as i}from"./index.52e92b87.js";import{r as n,x as o,y as c,o as d,t as p,v as u}from"./@vue.4e3ed528.js";import"./vue-router.ef27948d.js";import"./vant.892d7db5.js";import"./@vant.45f30c02.js";var h="./assets/chunk.74332d23.png";class v extends Phaser.Scene{constructor(s,e){super();this.width=s,this.height=e}preload(){this.load.image("ball",h)}create(){this.triangle=new Phaser.Geom.Triangle.BuildEquilateral(400,100,380),this.group=this.add.group({key:"ball",frameQuantity:64}),Phaser.Actions.PlaceOnTriangle(this.group.getChildren(),this.triangle)}}const _={setup(l){let s=n(null),e=n(null),t;return o(()=>{let a={type:r.exports.AUTO,width:e.value.clientWidth,height:e.value.clientHeight,parent:s.value,backgroundColor:"#2d2d2d",scene:[new v(e.value.clientWidth,e.value.clientHeight)]};t=new r.exports.Game(a)}),c(()=>{for(let a in t.scene.keys)t.scene.keys.hasOwnProperty(a)&&(t.scene.stop(a),t.scene.keys[a]=void 0)}),(a,m)=>(d(),p("div",{class:"canvas_box",ref_key:"canvasBox",ref:e},[u("div",{ref_key:"myCanvas",ref:s},null,512)],512))}};var w=i(_,[["__scopeId","data-v-2313e634"]]);export{w as default};
