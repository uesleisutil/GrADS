'reinit'

** Define o tempo de in�cio e fim de cada mes dentro do 
** arquivo diario 
di.1=1
df.1=31
di.2=32
df.2=59
di.3=60
df.3=90
di.4=91
df.4=120
di.5=121
df.5=151
di.6=152
df.6=181
di.7=182
df.7=212
di.8=213
df.8=243
di.9=244
df.9=273
di.10=274
df.10=304
di.11=305
df.11=334
di.12=335
df.12=365

** define a variavel mes.i para cada mes do ano
mes.1=jan
mes.2=fev
mes.3=mar
mes.4=abr
mes.5=mai
mes.6=jun
mes.7=jul
mes.8=ago
mes.9=set
mes.10=out
mes.11=nov
mes.12=dez


***inicializa o contador a partir do primeiro ano de dados
*** no caso aqui, o ano de inicio � 1982

ano=1982

while(ano<=2012)


**** a seguir abre o arquivo *.nc  *****

'sdfopen C:\OpenGrADS\Contents\Resources\SampleDatasets\sst.day.mean.'ano'.v2.nc'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -40'

** no if seguinte eh feita a comparacao para ver se o 
** ano � bissexto, se for, o numero de dias aumenta para
** 366

if(ano=1984|ano=1988|ano=1992|ano=1996|ano=2000|ano=2004|ano=2008|ano=2012)
  di.1=1
  df.1=31
  di.2=32
  df.2=60 
  di.3=61
  df.3=91
  di.4=92
  df.4=121
  di.5=122
  df.5=152
  di.6=153
  df.6=182
  di.7=183
  df.7=213
  di.8=214
  df.8=244
  di.9=245
  df.9=274
  di.10=275
  df.10=305
  di.11=306
  df.11=335
  di.12=336
  df.12=365
endif


**...inicializa o contador i que vai variar de 1 a 12 meses

i=1


** a fun��o while faz a operacao de contagem e comparacao, no
** caso, vai executar a lista de comandos abaixo at� que o
** valor seja menor ou igual a 12 

while(i<=12)


**** o comando say escreve na tela

say 'ano= 'ano

'set t 1'

'set mpdset hires'

*** o comando seguinte cria a media do mes.i para a variavel
*** sst

'define 'mes.i''ano'=ave(sst,t='di.i',t='df.i')'

*pull n
'c'
i=i+1
endwhile

ano=ano+1

endwhile


'define out2222 = ((out1982+out1983+out1984+out1985+out1986+out1987+out1988+out1989+out1990+out1991+out1992+out1993+out1994+out1995+out1996+out1997+out1998+out1999+out2000+out2001+out2002+out2003+out2004+out2005+out2006+out2007+out2008+out2009+out2010+out2011)/30)'

'define nov2222 = ((nov1982+nov1983+nov1984+nov1985+nov1986+nov1987+nov1988+nov1989+nov1990+nov1991+nov1992+nov1993+nov1994+nov1995+nov1996+nov1997+nov1998+nov1999+nov2000+nov2001+nov2002+nov2003+nov2004+nov2005+nov2006+nov2007+nov2008+nov2009+nov2010+nov2011)/30)'

'define dez2222 = ((dez1982+dez1983+dez1984+dez1985+dez1986+dez1987+dez1988+dez1989+dez1990+dez1991+dez1992+dez1993+dez1994+dez1995+dez1996+dez1997+dez1998+dez1999+dez2000+dez2001+dez2002+dez2003+dez2004+dez2005+dez2006+dez2007+dez2008+dez2009+dez2010+dez2011)/30)'


'sdfopen C:\OpenGrADS\Contents\Resources\SampleDatasets\sst.day.mean.2008.v2.nc'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -40'

'define out1=ave(sst,t='275',t='275')'
'define out2=ave(sst,t='276',t='276')'
'define out3=ave(sst,t='277',t='277')'
'define out4=ave(sst,t='278',t='278')'
'define out5=ave(sst,t='279',t='279')'
'define out6=ave(sst,t='280',t='280')'
'define out7=ave(sst,t='281',t='281')'
'define out8=ave(sst,t='282',t='282')'
'define out9=ave(sst,t='283',t='283')'
'define out10=ave(sst,t='284',t='284')'
'define out11=ave(sst,t='285',t='285')'
'define out12=ave(sst,t='286',t='286')'
'define out13=ave(sst,t='287',t='287')'
'define out14=ave(sst,t='288',t='288')'
'define out15=ave(sst,t='289',t='289')'
'define out16=ave(sst,t='290',t='290')'
'define out17=ave(sst,t='291',t='291')'
'define out18=ave(sst,t='292',t='292')'
'define out19=ave(sst,t='293',t='293')'
'define out20=ave(sst,t='294',t='294')'
'define out21=ave(sst,t='295',t='295')'
'define out22=ave(sst,t='296',t='296')'
'define out23=ave(sst,t='297',t='297')'
'define out24=ave(sst,t='298',t='298')'
'define out25=ave(sst,t='299',t='299')'
'define out26=ave(sst,t='300',t='300')'
'define out27=ave(sst,t='301',t='301')'
'define out28=ave(sst,t='302',t='302')'
'define out29=ave(sst,t='303',t='303')'
'define out30=ave(sst,t='304',t='304')'
'define out31=ave(sst,t='305',t='305')'

'define nov1=ave(sst,t='306',t='306')'
'define nov2=ave(sst,t='307',t='307')'
'define nov3=ave(sst,t='308',t='308')'
'define nov4=ave(sst,t='309',t='309')'
'define nov5=ave(sst,t='310',t='310')'
'define nov6=ave(sst,t='311',t='311')'
'define nov7=ave(sst,t='312',t='312')'
'define nov8=ave(sst,t='313',t='313')'
'define nov9=ave(sst,t='314',t='314')'
'define nov10=ave(sst,t='315',t='315')'
'define nov11=ave(sst,t='316',t='316')'
'define nov12=ave(sst,t='317',t='317')'
'define nov13=ave(sst,t='318',t='318')'
'define nov14=ave(sst,t='319',t='319')'
'define nov15=ave(sst,t='320',t='320')'
'define nov16=ave(sst,t='321',t='321')'
'define nov17=ave(sst,t='322',t='322')'
'define nov18=ave(sst,t='323',t='323')'
'define nov19=ave(sst,t='324',t='324')'
'define nov20=ave(sst,t='325',t='325')'
'define nov21=ave(sst,t='326',t='326')'
'define nov22=ave(sst,t='327',t='327')'
'define nov23=ave(sst,t='328',t='328')'
'define nov24=ave(sst,t='329',t='329')'
'define nov25=ave(sst,t='330',t='330')'
'define nov26=ave(sst,t='331',t='331')'
'define nov27=ave(sst,t='332',t='332')'
'define nov28=ave(sst,t='333',t='333')'
'define nov29=ave(sst,t='334',t='334')'
'define nov30=ave(sst,t='335',t='335')'

'define dez1=ave(sst,t='336',t='336')'
'define dez2=ave(sst,t='337',t='337')'
'define dez3=ave(sst,t='338',t='338')'
'define dez4=ave(sst,t='339',t='339')'
'define dez5=ave(sst,t='340',t='340')'
'define dez6=ave(sst,t='341',t='341')'
'define dez7=ave(sst,t='342',t='342')'
'define dez8=ave(sst,t='343',t='343')'
'define dez9=ave(sst,t='344',t='344')'
'define dez10=ave(sst,t='345',t='345')'
'define dez11=ave(sst,t='346',t='346')'
'define dez12=ave(sst,t='347',t='347')'
'define dez13=ave(sst,t='348',t='348')'
'define dez14=ave(sst,t='349',t='349')'
'define dez15=ave(sst,t='350',t='350')'
'define dez16=ave(sst,t='351',t='351')'
'define dez17=ave(sst,t='352',t='352')'
'define dez18=ave(sst,t='353',t='353')'
'define dez19=ave(sst,t='354',t='354')'
'define dez20=ave(sst,t='355',t='355')'
'define dez21=ave(sst,t='356',t='356')'
'define dez22=ave(sst,t='357',t='357')'
'define dez23=ave(sst,t='358',t='358')'
'define dez24=ave(sst,t='359',t='359')'
'define dez25=ave(sst,t='360',t='360')'
'define dez26=ave(sst,t='361',t='361')'
'define dez27=ave(sst,t='362',t='362')'
'define dez28=ave(sst,t='363',t='363')'
'define dez29=ave(sst,t='364',t='364')'
'define dez30=ave(sst,t='365',t='365')'
'define dez31=ave(sst,t='368',t='368')'


'define outanom1=(out1-out2222)'
'define outanom2=(out2-out2222)'
'define outanom3=(out3-out2222)'
'define outanom4=(out4-out2222)'
'define outanom5=(out5-out2222)'
'define outanom6=(out6-out2222)'
'define outanom7=(out7-out2222)'
'define outanom8=(out8-out2222)'
'define outanom9=(out9-out2222)'
'define outanom10=(out10-out2222)'
'define outanom11=(out11-out2222)'
'define outanom12=(out12-out2222)'
'define outanom13=(out13-out2222)'
'define outanom14=(out14-out2222)'
'define outanom15=(out15-out2222)'
'define outanom16=(out16-out2222)'
'define outanom17=(out17-out2222)'
'define outanom18=(out18-out2222)'
'define outanom19=(out19-out2222)'
'define outanom20=(out20-out2222)'
'define outanom21=(out21-out2222)'
'define outanom22=(out22-out2222)'
'define outanom23=(out23-out2222)'
'define outanom24=(out24-out2222)'
'define outanom25=(out25-out2222)'
'define outanom26=(out26-out2222)'
'define outanom27=(out27-out2222)'
'define outanom28=(out28-out2222)'
'define outanom29=(out29-out2222)'
'define outanom30=(out30-out2222)'
'define outanom31=(out31-out2222)'

'define novanom1=(nov1-nov2222)'
'define novanom2=(nov2-nov2222)'
'define novanom3=(nov3-nov2222)'
'define novanom4=(nov4-nov2222)'
'define novanom5=(nov5-nov2222)'
'define novanom6=(nov6-nov2222)'
'define novanom7=(nov7-nov2222)'
'define novanom8=(nov8-nov2222)'
'define novanom9=(nov9-nov2222)'
'define novanom10=(nov10-nov2222)'
'define novanom11=(nov11-nov2222)'
'define novanom12=(nov12-nov2222)'
'define novanom13=(nov13-nov2222)'
'define novanom14=(nov14-nov2222)'
'define novanom15=(nov15-nov2222)'
'define novanom16=(nov16-nov2222)'
'define novanom17=(nov17-nov2222)'
'define novanom18=(nov18-nov2222)'
'define novanom19=(nov19-nov2222)'
'define novanom20=(nov20-nov2222)'
'define novanom21=(nov21-nov2222)'
'define novanom22=(nov22-nov2222)'
'define novanom23=(nov23-nov2222)'
'define novanom24=(nov24-nov2222)'
'define novanom25=(nov25-nov2222)'
'define novanom26=(nov26-nov2222)'
'define novanom27=(nov27-nov2222)'
'define novanom28=(nov28-nov2222)'
'define novanom29=(nov29-nov2222)'
'define novanom30=(nov30-nov2222)'

'define dezanom1=(dez1-dez2222)'
'define dezanom2=(dez2-dez2222)'
'define dezanom3=(dez3-dez2222)'
'define dezanom4=(dez4-dez2222)'
'define dezanom5=(dez5-dez2222)'
'define dezanom6=(dez6-dez2222)'
'define dezanom7=(dez7-dez2222)'
'define dezanom8=(dez8-dez2222)'
'define dezanom9=(dez9-dez2222)'
'define dezanom10=(dez10-dez2222)'
'define dezanom11=(dez11-dez2222)'
'define dezanom12=(dez12-dez2222)'
'define dezanom13=(dez13-dez2222)'
'define dezanom14=(dez14-dez2222)'
'define dezanom15=(dez15-dez2222)'
'define dezanom16=(dez16-dez2222)'
'define dezanom17=(dez17-dez2222)'
'define dezanom18=(dez18-dez2222)'
'define dezanom19=(dez19-dez2222)'
'define dezanom20=(dez20-dez2222)'
'define dezanom21=(dez21-dez2222)'
'define dezanom22=(dez22-dez2222)'
'define dezanom23=(dez23-dez2222)'
'define dezanom24=(dez24-dez2222)'
'define dezanom25=(dez25-dez2222)'
'define dezanom26=(dez26-dez2222)'
'define dezanom27=(dez27-dez2222)'
'define dezanom28=(dez28-dez2222)'
'define dezanom29=(dez29-dez2222)'
'define dezanom30=(dez30-dez2222)'
'define dezanom31=(dez31-dez2222)'

'set gxout shaded'
'set cint 0.5'
'd outanom1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom1'
'run cbarn.gs'
'draw title ATSM 01OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom2'
'run cbarn.gs'
'draw title ATSM 02OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom3'
'run cbarn.gs'
'draw title ATSM 03OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom4'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom4'
'run cbarn.gs'
'draw title ATSM 04OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out4.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom5'
'run cbarn.gs'
'draw title ATSM 05OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom6'
'run cbarn.gs'
'draw title ATSM 06OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom7'
'run cbarn.gs'
'draw title ATSM 07OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom8'
'run cbarn.gs'
'draw title ATSM 08OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom9'
'run cbarn.gs'
'draw title ATSM 09OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom10'
'run cbarn.gs'
'draw title ATSM 10OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom11'
'run cbarn.gs'
'draw title ATSM 11OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom12'
'run cbarn.gs'
'draw title ATSM 12OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom13'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom13'
'run cbarn.gs'
'draw title ATSM 13OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom14'
'run cbarn.gs'
'draw title ATSM 14OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom15'
'run cbarn.gs'
'draw title ATSM 15OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom16'
'run cbarn.gs'
'draw title ATSM 16OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom17'
'run cbarn.gs'
'draw title ATSM 17OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out17.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom18'
'run cbarn.gs'
'draw title ATSM 18OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom19'
'run cbarn.gs'
'draw title ATSM 19OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom20'
'run cbarn.gs'
'draw title ATSM 20OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom21'
'run cbarn.gs'
'draw title ATSM 21OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom22'
'run cbarn.gs'
'draw title ATSM 22OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom23'
'run cbarn.gs'
'draw title ATSM 23OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom24'
'run cbarn.gs'
'draw title ATSM 24OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out24.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom25'
'run cbarn.gs'
'draw title ATSM 25OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom26'
'run cbarn.gs'
'draw title ATSM 26OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom27'
'run cbarn.gs'
'draw title ATSM 27OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom28'
'run cbarn.gs'
'draw title ATSM 28OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom29'
'run cbarn.gs'
'draw title ATSM 29OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom30'
'run cbarn.gs'
'draw title ATSM 30OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out30.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd outanom31'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd outanom31'
'run cbarn.gs'
'draw title ATSM 31OUT2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out31.png white'
'clear'



'set gxout shaded'
'set cint 0.5'
'd novanom1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom1'
'run cbarn.gs'
'draw title ATSM 01NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom2'
'run cbarn.gs'
'draw title ATSM 02NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom3'
'run cbarn.gs'
'draw title ATSM 03NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom4'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom4'
'run cbarn.gs'
'draw title ATSM 04NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov4.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom5'
'run cbarn.gs'
'draw title ATSM 05NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom6'
'run cbarn.gs'
'draw title ATSM 06NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom7'
'run cbarn.gs'
'draw title ATSM 07NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom8'
'run cbarn.gs'
'draw title ATSM 08NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom9'
'run cbarn.gs'
'draw title ATSM 09NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom10'
'run cbarn.gs'
'draw title ATSM 10NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom11'
'run cbarn.gs'
'draw title ATSM 11NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom12'
'run cbarn.gs'
'draw title ATSM 12NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom12'
'run cbarn.gs'
'draw title ATSM 13NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom14'
'run cbarn.gs'
'draw title ATSM 14NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom15'
'run cbarn.gs'
'draw title ATSM 15NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom16'
'run cbarn.gs'
'draw title ATSM 16NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom17'
'run cbarn.gs'
'draw title ATSM 17NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov17.png white'
'clear'


'set gxout shaded'
'set cint 0.5'
'd novanom18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom18'
'run cbarn.gs'
'draw title ATSM 18NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom19'
'run cbarn.gs'
'draw title ATSM 19NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom20'
'run cbarn.gs'
'draw title ATSM 20NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom21'
'run cbarn.gs'
'draw title ATSM 21NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom22'
'run cbarn.gs'
'draw title ATSM 22NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom23'
'run cbarn.gs'
'draw title ATSM 23NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom24'
'run cbarn.gs'
'draw title ATSM 24NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov24.png white'
'clear'


'set gxout shaded'
'set cint 0.5'
'd novanom25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom25'
'run cbarn.gs'
'draw title ATSM 25NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom26'
'run cbarn.gs'
'draw title ATSM 26NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom27'
'run cbarn.gs'
'draw title ATSM 27NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom28'
'run cbarn.gs'
'draw title ATSM 28NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom29'
'run cbarn.gs'
'draw title ATSM 29NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd novanom30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd novanom30'
'run cbarn.gs'
'draw title ATSM 30NOV2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_nov30.png white'
'clear'






'set gxout shaded'
'set cint 0.5'
'd dezanom1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom1'
'run cbarn.gs'
'draw title ATSM 01DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom2'
'run cbarn.gs'
'draw title ATSM 02DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom3'
'run cbarn.gs'
'draw title ATSM 03DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom4'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom4'
'run cbarn.gs'
'draw title ATSM 04DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez4.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom5'
'run cbarn.gs'
'draw title ATSM 05DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom6'
'run cbarn.gs'
'draw title ATSM 06DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom7'
'run cbarn.gs'
'draw title ATSM 07DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom8'
'run cbarn.gs'
'draw title ATSM 08DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom9'
'run cbarn.gs'
'draw title ATSM 09DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_out9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom10'
'run cbarn.gs'
'draw title ATSM 10DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom11'
'run cbarn.gs'
'draw title ATSM 11DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom12'
'run cbarn.gs'
'draw title ATSM 12DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom13'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom13'
'run cbarn.gs'
'draw title ATSM 13DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom14'
'run cbarn.gs'
'draw title ATSM 14DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom15'
'run cbarn.gs'
'draw title ATSM 15DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom16'
'run cbarn.gs'
'draw title ATSM 16DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom17'
'run cbarn.gs'
'draw title ATSM 17DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez17.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom18'
'run cbarn.gs'
'draw title ATSM 18DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom19'
'run cbarn.gs'
'draw title ATSM 19DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom20'
'run cbarn.gs'
'draw title ATSM 20DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom21'
'run cbarn.gs'
'draw title ATSM 21DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom22'
'run cbarn.gs'
'draw title ATSM 22DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom23'
'run cbarn.gs'
'draw title ATSM 23DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom24'
'run cbarn.gs'
'draw title ATSM 24DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez24.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom25'
'run cbarn.gs'
'draw title ATSM 25DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom26'
'run cbarn.gs'
'draw title ATSM 26DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom27'
'run cbarn.gs'
'draw title ATSM 27DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom28'
'run cbarn.gs'
'draw title ATSM 28DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom29'
'run cbarn.gs'
'draw title ATSM 29DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom30'
'run cbarn.gs'
'draw title ATSM 30DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez30.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dezanom31'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dezanom31'
'run cbarn.gs'
'draw title ATSM 31DEZ2008'
'printim C:\OpenGrADS\Contents\Resources\1tsmanom_dez31.png white'
'clear'
