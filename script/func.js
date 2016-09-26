var tdforbutton=document.getElementsByName("2"); // создаем кнопки
var btn=document.createElement('input');
btn.type='button';
btn.value='   Начать cначала   '
btn.onclick=click_begin;
tdforbutton[0].appendChild(btn);
var tdforbutton1=document.getElementsByName("3"); // создаем кнопки
var btn1=document.createElement('input');
btn1.type='button';
btn1.value='   Старт   ';
btn1.onclick=pause;
tdforbutton1[0].appendChild(btn1);
var flag_pause=false;
var counter=0;
var tdforwrite=document.getElementsByName("1");
tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(-1.4)*10000)/10000;
tdforwrite[0].style.backgroundColor="#FF6347";
var plot = new Plotter('plot',{
left: -1.5,
right: 1.5,
top: 2,
bottom: -1,
width:1000,
height: 600,
accuracy: 50000,
zoom: false});

var arr_for_zero=[-0.0431,-0.043,-0.0422,-0.042,-0.0415,-0.041,-0.0405,-0.0403,-0.0397,-0.0395,
-0.0389,-0.0387,-0.0381,-0.0379,-0.0374,-0.0372,-0.0367,-0.0365,-0.0361,-0.0359,
-0.0354,-0.0352,-0.0348,-0.03477,-0.0342,-0.0341,-0.0332,-0.033,-0.0321,-0.0319,
-0.0311,-0.0309,-0.0301,-0.03,-0.0292,-0.0291,-0.0284,-0.0283,-0.0276,-0.0275,
-0.0269,-0.0268,-0.0262,-0.0261,-0.0255,-0.0254,-0.0249,-0.0248,-0.0243,-0.0242,
-0.0232,-0.0231,-0.0221,-0.022,-0.0212,-0.0211,-0.0204,-0.0203,-0.0196,-0.0195,
-0.0188,-0.01872,-0.0181,-0.01804,-0.0175,-0.0174,-0.0169,-0.01685,-0.01635,-0.0163,
-0.01535,-0.0153,-0.0145,-0.0144,-0.01368,-0.01362,-0.01296,-0.01292,-0.01232,-0.01228,
-0.01121,-0.01119,-0.01029,-0.01027,-0.00952,-0.00949,-0.0088,-0.00882,-0.00825,-0.00824,
-0.00729,-0.00728,-0.00653,-0.00652,-0.00591,-0.0059,-0.0054,-0.005392,-0.00497,-0.004965,
-0.00429,-0.004285,-0.003771,-0.003769,-0.003365,-0.003364,-0.003039,-0.003036,-0.002769,-0.002768,
-0.002352,-0.002351,-0.002044,-0.002043,-0.001808,-0.001807,-0.0016205,-0.0016195,-0.0014679,-0.00146787,
-0.00134184,-0.00134182,-0.00123572,-0.0012357,-0.0011445,-0.0011444,-0.001067,-0.0010668,-0.001,0.001];

var arr_for_zero2=[47,47,48,48,49,49,50,50,51,51,
52,52,53,53,54,54,55,55,56,56,
57,57,58,58,59,59,61,61,63,63,
65,65,67,67,69,69,71,71,73,73,
75,75,77,77,79,79,81,81,83,83,
87,87,91,91,95,95,99,99,103,103,
107,107,111,111,115,115,119,119,123,123,
131,131,139,139,147,147,155,155,163,163,
179,179,195,195,211,211,227,227,243,243,
275,275,307,307,339,339,371,371,403,403,
467,467,531,531,595,595,659,659,723,723,
851,851,979,979,1107,1107,1235,1235,1363,1363,
1491,1491,1619,1619,1748,1748,1875,1875,2001,2001];

var arr_for_zero01=[];
var arr_for_zero02=[];
for (var i=0;i<=128;i++)
{
arr_for_zero01[i]=-1*arr_for_zero[128-i];
arr_for_zero02[i]=arr_for_zero2[128-i];
};

arr_for_zero01[129]=0.04501;
arr_for_zero02[129]=45;
//tdforwrite[0].innerHTML = arr_for_zero01[44];

//var ssss=-0.035;
//var tttt=58;
//var line100=plot.addFunc(function(x){
//	return (x+4/(2*tttt-1))*funcValue(ssss)/(ssss+4/(2*tttt-1));	
//},{strokeWidth:1.5, color:6})
//var arr_for_zero=[-0.043,-0.042,-0.0415,-0.041,-0.04,-0.039,-0.038,-0.037,-0.036,-0.035,-0.0342,-0.033,-0.0319,-0.031,-0.03,-0.0297,-0.029,-0.028,-0.027,-0.026,-0.0249,-0.024,-0.023,-0.022,-0.021,-0.02,-0.019,-0.018,-0.017,-0.016,-0.015,-0.014,-0.013,-0.012,-0.011,-0.01,-0.009,-0.008,-0.007,-0.006,-0.005,-0.004,-0.003,-0.002,-0.001,0.001];

//var arr_for_zero2=[47,48,49,49,51,52,53,55,56,58,59,61,63,65,67,68,69,72,75,77,81,83,87,91,96,101,106,112,118,126,134,143,154,167,182,201,223,251,286,334,401,501,667,1001,2001,2001];
//tdforwrite[0].innerHTML = arr_for_zero2[44];


var size_arr_for_zero=0;
var size_arr_for_zero01=0;

function funcValue(x) { 
	if (x == 0) {
		return 0;
	} else {
		return x*x*Math.abs(Math.cos(Math.PI/(x/2)));
	}
}

function derivValue(x) { 
	if (Math.cos(Math.PI/(x/2)) < 0) {
		return -2*x*Math.cos(2*Math.PI/x)-2*Math.PI*Math.sin(2*Math.PI/x);
	} else if (Math.cos(Math.PI/(x/2)) > 0) {
		return 2*x*Math.cos(2*Math.PI/x)+2*Math.PI*Math.sin(2*Math.PI/x);
	} else return 2*x*Math.abs(Math.cos(Math.PI/(x/2)));
}

var func1=plot.addFunc(function(x){
	return 2*x*Math.abs(Math.cos(Math.PI/(x/2)))+Math.PI*Math.sin(4*Math.PI/x)/Math.abs(Math.cos(Math.PI/(x/2)));	
},{left:-1.6,right:1.6,accuracy:30000,strokeWidth:0.4,color:3});

var func=plot.addFunc(function(x){
	return x*x*Math.abs(Math.cos(Math.PI/(x/2)));	
},{left:-1.6,right:1.6,accuracy:15000,strokeWidth:1});



var point1=[];
var point2=[];
for (var i=2;i<100;i++)
{
	point1[i-1]=plot.addPoint(-4/(2*i-1), 0,{color:18});
	point2[i-1]=plot.addPoint(4/(2*i-1), 0,{color:18});
	point1[i-1].setSize(3);point2[i-1].setSize(3);
};

var line_dif=plot.addLine(-0.025,0,0.025,0,{color:18,strokeWidth:5.5})

var point=plot.addPoint(0, 0);
point.setSize(5);

var p_x=-1.4;
var point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});

var n=2;
var flag_corner=false;

function find_point_dif(p_x){
	var b=derivValue(p_x);
	if(p_x<0){
		
		if(b>=0)
		flag_corner=true;
		if(b<0&&flag_corner==true)
		{
			n=n+1;
			flag_corner=false;
		}		
	}
	else{
		if(b>=0)
		flag_corner=true;
		if(b<0&&flag_corner==true)
		{
			n=n-1;
			flag_corner=false;
		}
	}
};

var line=plot.addFunc(function(x){
	return x*funcValue(p_x)/p_x;	
},{strokeWidth:1.5, color:4})
var line1=plot.addFunc(function(x){
	return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
},{strokeWidth:1.5, color:6})

var flag_pause=false;
var timer;

function pause(){
	if(p_x<=1.5)
	{
		if(counter==0)
		{
			counter=1;
			click_start();
			btn1.value='   Пауза   ';
		}
		else{
			if(flag_pause==false)
			{
				click_pause();
				btn1.value='   Продолжить   ';
			}
			else{
				click_start();
				btn1.value='   Пауза   ';
				
			}
		}
	}
}
function click_begin(){
	plot.plot.setTop(2);
	plot.plot.setBottom(-1);
	plot.plot.setLeft(-1.5);
	plot.plot.setRight(1.5);
	plot.draw();
	if(!flag_pause)
	{
		if(p_x>1.5)
		{
			p_x=-1.4;
			n=2;
			flag_corner=false;
			plot.remove(point_beg);
			plot.remove(line);
			plot.remove(line1);
			size_arr_for_zero=0;
			size_arr_for_zero01=0;
			point_beg=plot.addPoint(p_x,funcValue(p_x));
			point_beg.Color(20);
			line=plot.addFunc(function(x){
				return x*funcValue(p_x)/p_x;
			},{strokeWidth:1.8, color:4});
			line1=plot.addFunc(function(x){
				return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
			},{strokeWidth:1.8, color:6});
			counter=0;
			btn1.value='   Старт   ';
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
			if(derivValue(p_x)<=0)
			tdforwrite[0].style.backgroundColor="#FF6347";
			else
			tdforwrite[0].style.backgroundColor="#9ACD32";
			
		}
		else
		{
			p_x=-1.4;
			n=2;
			size_arr_for_zero=0;
			size_arr_for_zero01=0;
			flag_corner=false;
			tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
			if(derivValue(p_x)<=0)
			tdforwrite[0].style.backgroundColor="#FF6347";
			else
			tdforwrite[0].style.backgroundColor="#9ACD32";
		}		
	}
	else{
		p_x=-1.4;
		n=2;
		flag_corner=false;
		plot.remove(point_beg);
		plot.remove(line);
		plot.remove(line1);
		size_arr_for_zero=0;
		size_arr_for_zero01=0;
		point_beg=plot.addPoint(p_x,funcValue(p_x));
		point_beg.Color(20);
		line=plot.addFunc(function(x){
			return x*funcValue(p_x)/p_x;
		},{strokeWidth:1.8, color:4});
		line1=plot.addFunc(function(x){
			return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
		},{strokeWidth:1.8, color:6});
		counter=0;
		btn1.value='   Старт   ';
		tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
		if(derivValue(p_x)<=0)
		tdforwrite[0].style.backgroundColor="#FF6347";
		else
		tdforwrite[0].style.backgroundColor="#9ACD32";
		
		
	}

}
function click_pause(){
	clearInterval(timer);
	flag_pause=true;
}
function click_start() {
	
	flag_pause=false;
	
	
	timer = setInterval(function()
	{
		
		if(p_x>1.5)
		{
			clearInterval(timer);
		}
		else
		{

			if(p_x>-1.5&&p_x<=-0.5)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.005;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x));
				point_beg.Color(20);
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";
				if(Math.abs(p_x+0.5)<=0.00001)
				{
					plot.plot.setTop(0.4);
					plot.plot.setBottom(-0.2)
					plot.plot.setLeft(-0.6);
					plot.plot.setRight(0.6);
					plot.draw();
				}
			}
			if(p_x>-0.5&&p_x<=-0.2)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.002;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
				
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";
				if(p_x>-0.2)
				{
					plot.plot.setTop(0.1);
					plot.plot.setBottom(-0.05)
					plot.plot.setLeft(-0.25);
					plot.plot.setRight(0.25);
					plot.draw();
				}
				
			}
			if(p_x>-0.2&&p_x<=-0.1)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.0005;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
				
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";
				if(p_x>-0.1)
				{
					plot.plot.setTop(0.02);
					plot.plot.setBottom(-0.01)
					plot.plot.setLeft(-0.11);
					plot.plot.setRight(0.11);
					plot.draw();
				}
				
			}
			if(p_x>-0.1&&p_x<0)
			{
				
				if(p_x<-0.045){
					plot.remove(point_beg);
					plot.remove(line);
					plot.remove(line1);
					p_x=p_x+0.0005;
					find_point_dif(p_x);
					point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
					
					line=plot.addFunc(function(x){
						return x*funcValue(p_x)/p_x;
					},{strokeWidth:1.8, color:4})
					line1=plot.addFunc(function(x){
						return (x+4/(2*n-1))*funcValue(p_x)/(p_x+4/(2*n-1));	
					},{strokeWidth:1.8, color:6});
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
					if(derivValue(p_x)<=0)
					tdforwrite[0].style.backgroundColor="#FF6347";
					else
					tdforwrite[0].style.backgroundColor="#9ACD32";
				}
				else{
					
					plot.remove(point_beg);
					plot.remove(line);
					plot.remove(line1);
					p_x=arr_for_zero[size_arr_for_zero];
					point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
					
					line=plot.addFunc(function(x){
						return x*funcValue(p_x)/p_x;
					},{strokeWidth:1.8, color:4})
					if(p_x<0)
					{
						line1=plot.addFunc(function(x){
							return (x+4/(2*arr_for_zero2[size_arr_for_zero]-1))*funcValue(p_x)/(p_x+4/(2*arr_for_zero2[size_arr_for_zero]-1));	
						},{strokeWidth:1.8, color:6});
					}
					else{
						line1=plot.addFunc(function(x){
							return (x-4/(2*arr_for_zero2[size_arr_for_zero]-1))*funcValue(p_x)/(p_x-4/(2*arr_for_zero2[size_arr_for_zero]-1));	
						},{strokeWidth:1.8, color:6});
					}
					size_arr_for_zero=size_arr_for_zero+1;
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
					if(derivValue(p_x)<=0)
					tdforwrite[0].style.backgroundColor="#FF6347";
					else
					tdforwrite[0].style.backgroundColor="#9ACD32";
					
					

					
					

					
				}			
				
			}
			if(p_x>0&&p_x<0.1)
			{
				
				if(p_x<0.045){
					plot.remove(point_beg);
					plot.remove(line);
					plot.remove(line1);
					p_x=arr_for_zero01[size_arr_for_zero01];
					point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
					
					line=plot.addFunc(function(x){
						return x*funcValue(p_x)/p_x;
					},{strokeWidth:1.8, color:4})
					line1=plot.addFunc(function(x){
						return (x-4/(2*arr_for_zero02[size_arr_for_zero01]-1))*funcValue(p_x)/(p_x-4/(2*arr_for_zero02[size_arr_for_zero01]-1));	
					},{strokeWidth:1.8, color:6});		
					flag_corner=false;
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
					size_arr_for_zero01=size_arr_for_zero01+1;
					if(derivValue(p_x)<=0)
					tdforwrite[0].style.backgroundColor="#FF6347";
					else
					tdforwrite[0].style.backgroundColor="#9ACD32";
					n=44;
				}
				else{
					
					plot.remove(point_beg);
					plot.remove(line);
					plot.remove(line1);
					p_x=p_x+0.0005;
					find_point_dif(p_x);
					point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
					
					line=plot.addFunc(function(x){
						return x*funcValue(p_x)/p_x;
					},{strokeWidth:1.8, color:4})
					line1=plot.addFunc(function(x){
						return (x-4/(2*n-1))*funcValue(p_x)/(p_x-4/(2*n-1));	
					},{strokeWidth:1.8, color:6});
					tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
					if(derivValue(p_x)<=0)
					tdforwrite[0].style.backgroundColor="#FF6347";
					else
					tdforwrite[0].style.backgroundColor="#9ACD32";
					if(p_x>0.1)
					{
						plot.plot.setTop(0.1);
						plot.plot.setBottom(-0.05)
						plot.plot.setLeft(-0.25);
						plot.plot.setRight(0.25);
						plot.draw();
					}
				}
			}
			if(p_x>0.1&&p_x<=0.2)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.001;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
				
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x-4/(2*n-1))*funcValue(p_x)/(p_x-4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";
				if(p_x>0.2)
				{
					plot.plot.setTop(0.4);
					plot.plot.setBottom(-0.2);
					plot.plot.setLeft(-0.6);
					plot.plot.setRight(0.6);
					plot.draw();
				}
			}
			if(p_x>0.2&&p_x<=0.5)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.001;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
				
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x-4/(2*n-1))*funcValue(p_x)/(p_x-4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";
				if(p_x>0.5)
				{
					plot.plot.setTop(2);
					plot.plot.setBottom(-1);
					plot.plot.setLeft(-1.5);
					plot.plot.setRight(1.5);
					plot.draw();
				}
			}
			if(p_x>0.5&&p_x<=1.5)
			{

				plot.remove(point_beg);
				plot.remove(line);
				plot.remove(line1);
				p_x=p_x+0.005;
				find_point_dif(p_x);
				point_beg=plot.addPoint(p_x,funcValue(p_x),{color:20});
				
				line=plot.addFunc(function(x){
					return x*funcValue(p_x)/p_x;
				},{strokeWidth:1.8, color:4})
				line1=plot.addFunc(function(x){
					return (x-4/(2*n-1))*funcValue(p_x)/(p_x-4/(2*n-1));	
				},{strokeWidth:1.8, color:6});
				tdforwrite[0].innerHTML = 'Тангенс угла наклона касательной: ' + Math.round(derivValue(p_x)*10000)/10000;
				if(derivValue(p_x)<=0)
				tdforwrite[0].style.backgroundColor="#FF6347";
				else
				tdforwrite[0].style.backgroundColor="#9ACD32";

			}
		}	
	}, 1);


}



