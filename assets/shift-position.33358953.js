import{p as i}from"./phaser.6acf4b60.js";import{_ as r}from"./index.7adf31ff.js";import{r as n,e as h,f as l,t as c,y as p,z as d}from"./@vue.9cc422f7.js";import"./vue-router.348f6813.js";import"./vant.67835b18.js";import"./@vant.b4a554a7.js";var u="./assets/deepblue.73ea23cc.png",f="./assets/ball-tlb.07a892e8.png";class v extends Phaser.Scene{constructor(t,e){super();this.width=t,this.height=e,this.center={x:this.width/2,y:this.height/2},this.move=0,this.x=0,this.y=0}preload(){this.load.image("sky",u),this.load.image("ball",f)}create(){this.add.image(0,0,"sky").setOrigin(0),this.group=this.add.group({key:"ball",frameQuantity:50}),this.input.on("pointermove",function(t){this.x=t.x,this.y=t.y},this)}update(t,e){this.move+=e,this.move>6&&(Phaser.Actions.ShiftPosition(this.group.getChildren(),this.x,this.y),this.move=0)}}const m={setup(o){let t=n(null),e=n(null),a;return h(()=>{let s={type:i.exports.AUTO,width:e.value.clientWidth,height:e.value.clientHeight,parent:t.value,backgroundColor:"#2d2d2d",scene:[new v(e.value.clientWidth,e.value.clientHeight)]};a=new i.exports.Game(s)}),l(()=>{for(let s in a.scene.keys)a.scene.keys.hasOwnProperty(s)&&(a.scene.stop(s),a.scene.keys[s]=void 0)}),(s,y)=>(c(),p("div",{class:"canvas_box",ref_key:"canvasBox",ref:e},[d("div",{ref_key:"myCanvas",ref:t},null,512)],512))}};var w=r(m,[["__scopeId","data-v-5123ef70"]]);export{w as default};
