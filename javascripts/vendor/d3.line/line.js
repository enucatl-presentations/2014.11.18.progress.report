(function(){null==d3.chart&&(d3.chart={}),d3.chart.line=function(){var t,e,n,r,a,l,s,u,i,c,o,g,d,f,h,p;return s={top:20,right:20,bottom:40,left:70},u=900,r=600,a="linear",l=18,g=function(t){return t[0]},p=function(t){return t[1]},n=function(t){return t.name},c=d3.scale.linear(),f=d3.scale.linear(),e=d3.scale.category20(),i=d3.svg.axis().scale(c).orient("bottom"),d=d3.svg.axis().scale(f).orient("left"),o=void 0,h=void 0,t=function(t){return t.each(function(t){var m,x,v,y,_,b,A;return m=t.map(n).filter(function(t,e,n){return n.indexOf(t===e)}),e.domain(m),t=t.map(function(t){return{color:n(t),values:t.values.map(function(e,n){return{x:g.call(t.values,e,n),y:p.call(t.values,e,n)}})}}),c.range([0,u-s.left-s.right]),f.range([r-s.top-s.bottom,0]),A=d3.select(this).selectAll("svg").data([t]),v=A.enter().append("svg").append("g"),v.append("g").classed("x axis",!0).append("text").classed("label",!0).attr("x",u-s.right-s.left).attr("y",s.bottom-6).style("text-anchor","end").text(o),v.append("g").classed("y axis",!0).append("text").classed("label",!0).attr("y",-s.left+6).attr("transform","rotate(-90)").attr("dy",".71em").style("text-anchor","end").text(h),v.append("g").classed("paths",!0),v.append("g").classed("legends",!0),A.attr("width",u).attr("height",r),x=A.select("g").attr("transform","translate("+s.left+", "+s.top+")"),null!=l&&(_=x.select("g.legends").selectAll("g.legend").data(e.domain()),y=_.enter().append("g").classed("legend",!0),_.each(function(t){var n,r;return n=d3.select(this).selectAll("rect").data([t]),n.enter().append("rect").attr("x",u-s.right-s.left-l).attr("width",l).attr("height",l),n.style("fill",e),r=d3.select(this).selectAll("text").data([t]),r.enter().append("text").attr("x",u-s.right-s.left-l-2).attr("y",9).attr("dy",l/2).style("text-anchor","end"),r.text(function(t){return t})}),_.attr("transform",function(t,e){return"translate(0, "+(l+2)*e+")"}),_.exit().remove()),x.select(".x.axis").attr("transform","translate(0, "+f.range()[0]+")").call(i),x.select(".y.axis").transition().call(d),b=x.select(".paths").selectAll(".path").data(t),b.enter().append("path").classed("path",!0),b.transition().duration(500).attr("stroke",function(t){return e(t.color)}).attr("d",function(t){return d3.svg.line().interpolate(a).x(function(t){return c(t.x)}).y(function(t){return f(t.y)})(t.values)}),b.exit().remove()})},t.width=function(e){return arguments.length?(u=e,t):u},t.height=function(e){return arguments.length?(r=e,t):r},t.margin=function(e){return arguments.length?(s=e,t):s},t.x_value=function(e){return arguments.length?(g=e,t):g},t.color_value=function(e){return arguments.length?(n=e,t):n},t.y_value=function(e){return arguments.length?(p=e,t):p},t.x_title=function(e){return arguments.length?(o=e,t):o},t.y_title=function(e){return arguments.length?(h=e,t):h},t.interpolation=function(e){return arguments.length?(a=e,t):a},t.legend_square_size=function(e){return arguments.length?(l=e,t):l},t.x_scale=function(e){return arguments.length?(c=e,t):c},t.color_scale=function(n){return arguments.length?(e=n,t):e},t.y_scale=function(e){return arguments.length?(f=e,t):f},t.x_axis=function(e){return arguments.length?(i=e,t):i},t.y_axis=function(e){return arguments.length?(d=e,t):d},t}}).call(this);