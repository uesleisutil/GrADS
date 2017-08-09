'reinit'

d1=1
d2=2
d3=3
d4=4
d5=5
d6=6
d7=7
d8=8
d9=9
d10=10
d11=11
d12=12
d13=13
d14=14
d15=15
d16=16
d17=17
d18=18
d19=19
d20=20
d21=21
d22=22
d23=23
d23=24
d25=25
d26=26
d27=27
d28=28
d29=29
d30=30
d31=31
d32=32
d33=33
d34=34
d35=35
d36=36
d37=37
d38=38
d39=39
d40=40
d41=41
d42=42
d43=43
d44=44
d45=45
d46=46
d47=47
d48=48
d49=49
d50=50
d51=51
d52=52
d53=53
d54=54
d55=55
d56=56
d57=57
d58=58
d59=59
d60=60
d61=61
d62=62
d63=63
d64=64
d65=65
d66=66
d67=67
d68=68
d69=69
d70=70
d71=71
d72=72
d73=73
d74=74
d75=75
d76=76
d78=78
d79=79
d80=80
d81=81
d82=82
d83=83
d84=84
d85=85
d86=86
d87=87
d89=89
d90=90
d91=91
d92=92
d93=93
d94=94
d95=95
d96=96
d97=97
d98=98
d99=99
d100=100
d101=101
d102=102
d103=103
d104=104
d105=105
d106=106
d107=107
d108=108
d109=109
d110=110
d111=111
d112=112
d113=113
d114=114
d115=115
d116=116
d117=117
d118=118
d119=119
d120=120
d121=121
d122=122
d123=123
d124=124
d125=125
d126=126
d127=127
d128=128
d129=129
d130=130
d131=131
d132=132
d133=133
d134=134
d135=135
d136=136
d137=137
d138=138
d139=139
d140=140
d141=141
d142=142
d143=143
d144=144
d145=145
d146=146
d147=147
d148=148
d149=149
d150=150
d151=151
d152=152
d153=153
d154=154
d155=155
d156=156
d157=157
d158=158
d159=159
d160=160
d161=161
d162=162
d163=163
d164=164
d165=165
d166=166
d167=167
d168=168
d169=169
d170=170
d171=171
d172=172
d173=173
d174=174
d175=175
d176=176
d178=178
d179=179
d180=180
d181=182
d182=182
d183=183
d184=184
d185=185
d186=186
d187=187
d188=188
d189=189
d190=190
d191=192
d193=193
d194=194
d195=195
d196=196
d197=197
d198=198
d199=199
d200=200
d201=201
d202=202
d203=203
d204=204
d205=205
d206=206
d207=207
d208=208
d209=209
d210=210
d211=211
d212=212
d213=213
d214=214
d215=215
d216=216
d217=217
d218=218
d219=219
d220=220
d221=221
d222=222
d223=223
d224=224
d225=225
d226=226
d227=227
d228=228
d229=229
d230=230
d231=231
d232=232
d233=233
d234=234
d235=235
d236=236
d237=237
d238=238
d239=239
d240=240
d241=241
d242=242
d243=243
d244=244
d245=245
d246=246
d247=247
d248=248
d249=249
d250=250
d251=251
d252=252
d253=253
d254=254
d255=255
d256=256
d257=257
d258=258
d259=259
d260=260
d261=261
d262=262
d263=263
d264=264
d265=265
d266=266
d267=267
d268=268
d269=269
d270=270
d271=271
d272=272
d273=273
d274=274
d275=275
d276=276
d277=277
d278=278
d279=279
d280=280
d281=281
d282=282
d283=283
d284=284
d285=285
d286=286
d287=287
d288=288
d289=289
d290=290
d291=291
d292=292
d293=293
d294=294
d295=295
d296=296
d297=297
d298=298
d299=299
d300=300
d301=301
d302=302
d303=303
d304=304
d305=305
d306=306
d307=307
d308=308
d309=309
d310=310
d311=311
d312=312
d313=313
d314=314
d315=315
d316=316
d317=317
d318=318
d319=319
d320=320
d321=321
d322=322
d323=323
d324=324
d325=325
d326=326
d327=327
d328=328
d329=329
d330=330
d331=331
d332=332
d333=333
d334=334
d335=335
d336=336
d337=337
d338=338
d339=339
d340=340
d341=341
d342=324
d343=343
d344=344
d345=345
d346=346
d347=347
d348=348
d349=349
d350=350
d351=351
d352=352
d352=352
d353=353
d354=354
d355=355
d356=356
d357=357
d358=358
d359=359
d360=360
d361=361
d362=362
d363=363
d364=364
d365=365
d366=366

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
'define dez31=ave(sst,t='366',t='366')'







'set gxout shaded'
'set cint 0.5'
'd out1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out1'
'run cbarn.gs'
'draw title Outubro Dia 1'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out2'
'run cbarn.gs'
'draw title Outubro Dia 2'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out3'
'run cbarn.gs'
'draw title Outubro Dia 3'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out4'
'set ccolor 4'
'set cint 0.5'
'set gxout contour'
'd out4'
'run cbarn.gs'
'draw title Outubro Dia 4'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out4.png white'
'clear'


'set gxout shaded'
'set cint 0.5'
'd out5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out5'
'run cbarn.gs'
'draw title Outubro Dia 5'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out6'
'run cbarn.gs'
'draw title Outubro Dia 6'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out7'
'run cbarn.gs'
'draw title Outubro Dia 7'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out8'
'run cbarn.gs'
'draw title Outubro Dia 8'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out9'
'run cbarn.gs'
'draw title Outubro Dia 9'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out10'
'run cbarn.gs'
'draw title Outubro Dia 10'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out11'
'run cbarn.gs'
'draw title Outubro Dia 11'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out12'
'run cbarn.gs'
'draw title Outubro Dia 12'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out13'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out13'
'run cbarn.gs'
'draw title Outubro Dia 13'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out14'
'run cbarn.gs'
'draw title Outubro Dia 14'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out15'
'run cbarn.gs'
'draw title Outubro Dia 15'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out16'
'run cbarn.gs'
'draw title Outubro Dia 16'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out17'
'run cbarn.gs'
'draw title Outubro Dia 17'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out17.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out18'
'run cbarn.gs'
'draw title Outubro Dia 18'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out19'
'run cbarn.gs'
'draw title Outubro Dia 19'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out20'
'run cbarn.gs'
'draw title Outubro Dia 20'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out21'
'run cbarn.gs'
'draw title Outubro Dia 21'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out22'
'run cbarn.gs'
'draw title Outubro Dia 22'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out23'
'run cbarn.gs'
'draw title Outubro Dia 23'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out24'
'run cbarn.gs'
'draw title Outubro Dia 24'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out24.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out25'
'run cbarn.gs'
'draw title Outubro Dia 25'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out26'
'run cbarn.gs'
'draw title Outubro Dia 26'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out27'
'run cbarn.gs'
'draw title Outubro Dia 27'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out28'
'run cbarn.gs'
'draw title Outubro Dia 28'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out29'
'run cbarn.gs'
'draw title Outubro Dia 29'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out30'
'run cbarn.gs'
'draw title Outubro Dia 30'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out30.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd out31'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd out31'
'run cbarn.gs'
'draw title Outubro Dia 31'
'printim C:\OpenGrADS\Contents\Resources\1tsm_out31.png white'
'clear'







'set gxout shaded'
'set cint 0.5'
'd nov1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov1'
'run cbarn.gs'
'draw title Novembro Dia 1'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov2'
'run cbarn.gs'
'draw title Novembro Dia 2'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov3'
'run cbarn.gs'
'draw title Novembro Dia 3'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov4'
'set ccolor 4'
'set cint 0.5'
'set gxout contour'
'd nov1'
'run cbarn.gs'
'draw title Novembro Dia 4'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov4.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov5'
'run cbarn.gs'
'draw title Novembro Dia 5'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov6'
'run cbarn.gs'
'draw title Novembro Dia 6'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov7'
'run cbarn.gs'
'draw title Novembro Dia 7'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov8'
'run cbarn.gs'
'draw title Novembro Dia 8'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov9'
'run cbarn.gs'
'draw title Novembro Dia 9'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov10'
'run cbarn.gs'
'draw title Novembro Dia 10'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov11'
'run cbarn.gs'
'draw title Novembro Dia 11'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov12'
'run cbarn.gs'
'draw title Novembro Dia 12'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov13'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov13'
'run cbarn.gs'
'draw title Novembro Dia 13'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov14'
'run cbarn.gs'
'draw title Novembro Dia 14'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov15'
'run cbarn.gs'
'draw title Novembro Dia 15'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov16'
'run cbarn.gs'
'draw title Novembro Dia 16'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov17'
'run cbarn.gs'
'draw title Novembro Dia 17'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov17.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov18'
'run cbarn.gs'
'draw title Novembro Dia 18'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov19'
'run cbarn.gs'
'draw title Novembro Dia 19'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov20'
'run cbarn.gs'
'draw title Novembro Dia 20'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov21'
'run cbarn.gs'
'draw title Novembro Dia 21'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov22'
'run cbarn.gs'
'draw title Novembro Dia 22'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov23'
'run cbarn.gs'
'draw title Novembro Dia 23'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov24'
'run cbarn.gs'
'draw title Novembro Dia 24'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov24.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov25'
'run cbarn.gs'
'draw title Novembro Dia 25'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov26'
'run cbarn.gs'
'draw title Novembro Dia 26'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov27'
'run cbarn.gs'
'draw title Novembro Dia 27'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov28'
'run cbarn.gs'
'draw title Novembro Dia 28'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov29'
'run cbarn.gs'
'draw title Novembro Dia 29'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd nov30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd nov30'
'run cbarn.gs'
'draw title Novembro Dia 30'
'printim C:\OpenGrADS\Contents\Resources\1tsm_nov30.png white'
'clear'








'set gxout shaded'
'set cint 0.5'
'd dez1'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez1'
'run cbarn.gs'
'draw title Dezembro Dia 1'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez1.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez2'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez2'
'run cbarn.gs'
'draw title Dezembro Dia 2'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez2.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez3'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez3'
'run cbarn.gs'
'draw title Dezembro Dia 3'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez3.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez4'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez4'
'run cbarn.gs'
'draw title Dezembro Dia 4'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez4.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez5'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez5'
'run cbarn.gs'
'draw title Dezembro Dia 5'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez5.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez6'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez6'
'run cbarn.gs'
'draw title Dezembro Dia 6'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez6.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez7'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez7'
'run cbarn.gs'
'draw title Dezembro Dia 7'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez7.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez8'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez8'
'run cbarn.gs'
'draw title Dezembro Dia 8'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez8.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez9'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez9'
'run cbarn.gs'
'draw title Dezembro Dia 9'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez9.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez10'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez10'
'run cbarn.gs'
'draw title Dezembro Dia 10'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez10.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez11'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez11'
'run cbarn.gs'
'draw title Dezembro Dia 11'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez11.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez12'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez12'
'run cbarn.gs'
'draw title Dezembro Dia 12'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez12.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez13'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez13'
'run cbarn.gs'
'draw title Dezembro Dia 13'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez13.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez14'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez14'
'run cbarn.gs'
'draw title Dezembro Dia 14'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez14.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez15'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez15'
'run cbarn.gs'
'draw title Dezembro Dia 15'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez15.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez16'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez16'
'run cbarn.gs'
'draw title Dezembro Dia 16'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez16.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez17'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez17'
'run cbarn.gs'
'draw title Dezembro Dia 17'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez17.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez18'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez18'
'run cbarn.gs'
'draw title Dezembro Dia 18'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez18.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez19'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez19'
'run cbarn.gs'
'draw title Dezembro Dia 19'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez19.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez20'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez20'
'run cbarn.gs'
'draw title Dezembro Dia 20'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez20.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez21'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez21'
'run cbarn.gs'
'draw title Dezembro Dia 21'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez21.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez22'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez22'
'run cbarn.gs'
'draw title Dezembro Dia 22'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez22.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez23'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez23'
'run cbarn.gs'
'draw title Dezembro Dia 23'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez23.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez24'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez24'
'run cbarn.gs'
'draw title Dezembro Dia 24'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez24.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez25'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez25'
'run cbarn.gs'
'draw title Dezembro Dia 25'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez25.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez26'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez26'
'run cbarn.gs'
'draw title Dezembro Dia 26'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez26.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez27'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez27'
'run cbarn.gs'
'draw title Dezembro Dia 27'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez27.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez28'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez28'
'run cbarn.gs'
'draw title Dezembro Dia 28'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez28.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez29'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez29'
'run cbarn.gs'
'draw title Dezembro Dia 29'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez29.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez30'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez30'
'run cbarn.gs'
'draw title Dezembro Dia 30'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez30.png white'
'clear'

'set gxout shaded'
'set cint 0.5'
'd dez31'
'set ccolor 1'
'set cint 0.5'
'set gxout contour'
'd dez31'
'run cbarn.gs'
'draw title Dezembro Dia 31'
'printim C:\OpenGrADS\Contents\Resources\1tsm_dez31.png white'
'clear'
