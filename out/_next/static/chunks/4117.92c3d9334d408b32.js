"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4117],{94117:function(t,a,e){e.r(a),e.d(a,{Split:function(){return n}});var r=e(49242),s=e(2593),c=e(64146),i=e(5749);e(13550),e(64063),e(2162),e(77191),e(54098),e(54146);class n{static contractRoles=i.dW;get chainId(){return this._chainId}constructor(t,a,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.ds(t,a,s,r,e);this._chainId=c,this.abi=i.e.parse(s||[]),this.contractWrapper=p,this.storage=e,this.metadata=new i.ah(this.contractWrapper,i.dX,this.storage),this.app=new i.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ai(this.contractWrapper,n.contractRoles),this.encoder=new i.ag(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){let t=[],a=s.O$.from(0),e=await this.contractWrapper.read("payeeCount",[]);for(;a.lt(e);)try{let e=await this.contractWrapper.read("payee",[a]);t.push(await this.getRecipientSplitPercentage(e)),a=a.add(1)}catch(t){if("method"in t&&t.method.toLowerCase().includes("payee(uint256)"))break;throw t}return t}async balanceOfAllRecipients(){let t=await this.getAllRecipients(),a={};for(let e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){let a=await (0,i.cG)(t),e=await this.getAllRecipients(),r={};for(let t of e)r[t.address]=await this.balanceOfToken(t.address,a);return r}async balanceOf(t){let a=await (0,i.cG)(t),e=await this.contractWrapper.getProvider().getBalance(this.getAddress()),r=await this.contractWrapper.read("totalReleased",[]),s=e.add(r);return this._pendingPayment(a,s,await this.contractWrapper.read("released",[a]))}async balanceOfToken(t,a){let e=await (0,i.cG)(a),s=await (0,i.cG)(t),n=new c.CH(e,r,this.contractWrapper.getProvider()),p=await n.balanceOf(this.getAddress()),o=await this.contractWrapper.read("totalReleased",[e]),d=p.add(o),h=await this._pendingPayment(s,d,await this.contractWrapper.read("released",[e,s]));return await (0,i.bc)(this.contractWrapper.getProvider(),e,h)}async getRecipientSplitPercentage(t){let a=await (0,i.cG)(t),[e,r]=await Promise.all([this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:a,splitPercentage:r.mul(s.O$.from(1e7)).div(e).toNumber()/1e5}}withdraw=(0,i.dt)(async t=>i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await (0,i.cG)(t)]}));withdrawToken=(0,i.dt)(async(t,a)=>i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await (0,i.cG)(a),await (0,i.cG)(t)]}));distribute=(0,i.dt)(async()=>i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]}));distributeToken=(0,i.dt)(async t=>i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await (0,i.cG)(t)]}));async _pendingPayment(t,a,e){let r=a.mul(await this.contractWrapper.read("shares",[await (0,i.cG)(t)])),s=r.div(await this.contractWrapper.read("totalShares",[]));return s.sub(e)}async prepare(t,a,e){return i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:e})}async call(t,a,e){return this.contractWrapper.call(t,a,e)}}}}]);