(function(){null==d3.chart&&(d3.chart={}),d3.chart.scatter=function(){var t,e,n,r,a,l,c,s,u,i,o,g,d,f,h,x;return l={top:20,right:20,bottom:40,left:70},s=900,r=600,c=3,a=18,g=function(t){return t[0]},x=function(t){return t[1]},n=function(t){return t.name},i=d3.scale.linear(),f=d3.scale.linear(),e=d3.scale.category20(),u=d3.svg.axis().scale(i).orient("bottom"),d=d3.svg.axis().scale(f).orient("left"),o=void 0,h=void 0,t=function(t){return t.each(function(t){var m,p,v,y,_,b,A;return p=t.map(n).filter(function(t,e,n){return n.indexOf(t===e)}),e.domain(p),t=t.map(function(t){return{values:t.values.map(function(e,r){return{color:n(t),x:g.call(t.values,e,r),y:x.call(t.values,e,r)}})}}),t=t.map(function(t){return t.values}).reduce(function(t,e){return t.concat(e)}),i.range([0,s-l.left-l.right]),f.range([r-l.top-l.bottom,0]),A=d3.select(this).selectAll("svg").data([t]),y=A.enter().append("svg").append("g"),y.append("g").classed("x axis",!0).append("text").classed("label",!0).attr("x",s-l.right-l.left).attr("y",.9*l.bottom).style("text-anchor","end").text(o),y.append("g").classed("y axis",!0).append("text").classed("label",!0).attr("y",-.6*l.left).attr("transform","rotate(-90)").style("text-anchor","end").text(h),y.append("g").classed("circles",!0),y.append("g").classed("legends",!0),A.attr("width",s).attr("height",r),v=A.select("g").attr("transform","translate("+l.left+", "+l.top+")"),m=v.select(".circles").selectAll(".circle").data(function(t){return t}),m.enter().append("circle").classed("circle",!0),m.transition().duration(500).attr("r",c).attr("cx",function(t){return i(t.x)}).attr("cy",function(t){return f(t.y)}).style("fill",function(t){return e(t.color)}),m.exit().remove(),b=v.select("g.legends").selectAll("g.legend").data(e.domain()),_=b.enter().append("g").classed("legend",!0),b.each(function(t){var n,r;return n=d3.select(this).selectAll("rect").data([t]),n.enter().append("rect").attr("x",s-l.right-l.left-a).attr("width",a).attr("height",a),n.style("fill",e),r=d3.select(this).selectAll("text").data([t]),r.enter().append("text").attr("x",s-l.right-l.left-a-2).attr("y",a/4).attr("dy",a/2).style("text-anchor","end"),r.text(function(t){return t})}),b.attr("transform",function(t,e){return"translate(0, "+(a+2)*e+")"}),b.exit().remove(),v.select(".x.axis").attr("transform","translate(0, "+f.range()[0]+")").call(u),v.select(".y.axis").transition().call(d)})},t.width=function(e){return arguments.length?(s=e,t):s},t.height=function(e){return arguments.length?(r=e,t):r},t.margin=function(e){return arguments.length?(l=e,t):l},t.x_value=function(e){return arguments.length?(g=e,t):g},t.color_value=function(e){return arguments.length?(n=e,t):n},t.y_value=function(e){return arguments.length?(x=e,t):x},t.x_title=function(e){return arguments.length?(o=e,t):o},t.y_title=function(e){return arguments.length?(h=e,t):h},t.legend_square_size=function(e){return arguments.length?(a=e,t):a},t.radius=function(e){return arguments.length?(c=e,t):c},t.x_axis=function(e){return arguments.length?(u=e,t):u},t.y_axis=function(e){return arguments.length?(d=e,t):d},t.x_scale=function(e){return arguments.length?(i=e,t):i},t.y_scale=function(e){return arguments.length?(f=e,t):f},t}}).call(this);