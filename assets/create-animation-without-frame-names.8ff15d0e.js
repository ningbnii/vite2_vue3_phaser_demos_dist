import{p as n}from"./phaser.6acf4b60.js";import{_ as i}from"./index.6f6f166c.js";import{r as o,e as c,f as l,t as p,y as h,z as m}from"./@vue.53d8baf6.js";import"./vue-router.8fba5e93.js";import"./vant.a06d8c33.js";import"./@vant.18d5f034.js";class d extends Phaser.Scene{constructor(t,e){super();this.width=t,this.height=e,this.center={x:this.width/2,y:this.height/2}}preload(){const t=new URL("./assets/zombie-no-pivot.24043bf7.png",self.location).href,e=new URL("./assets/zombie-no-pivot.c70e2034.json",self.location).href;this.load.atlas("zombie",t,e)}create(){this.anims.create({key:"walk",frames:"zombie",frameRate:12,repeat:-1}),this.add.sprite(this.center.x,this.center.y).play("walk")}}const f={setup(r){let t=o(null),e=o(null),s;return c(()=>{let a={type:n.exports.AUTO,width:e.value.clientWidth,height:e.value.clientHeight,parent:t.value,backgroundColor:"#2d2d2d",scene:[new d(e.value.clientWidth,e.value.clientHeight)]};s=new n.exports.Game(a)}),l(()=>{for(let a in s.scene.keys)s.scene.keys.hasOwnProperty(a)&&(s.scene.stop(a),s.scene.keys[a]=void 0)}),(a,u)=>(p(),h("div",{class:"canvas_box",ref_key:"canvasBox",ref:e},[m("div",{ref_key:"myCanvas",ref:t},null,512)],512))}};var g=i(f,[["__scopeId","data-v-efe6534e"]]);export{g as default};
