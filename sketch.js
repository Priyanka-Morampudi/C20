{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red236\green236\blue236;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c94118\c94118\c94118;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var fixedRect, movingRect; \
\
function setup() \{ \
createCanvas(1200,800); \
\
fixedRect = createSprite(600, 400, 50, 80); \
fixedRect.shapeColor = "green"; \
fixedRect.debug = true; \
\
movingRect = createSprite(400,200,80,30); \
movingRect.shapeColor = "green"; \
movingRect.debug = true; \
\} \
\
function draw() \{ \
background(0,0,0); \
\
movingRect.x = World.mouseX; \
movingRect.y = World.mouseY;\
 if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) \{ \
movingRect.shapeColor = "red"; \
fixedRect.shapeColor = "red"; \
\} \
else \{ movingRect.shapeColor = "green"; fixedRect.shapeColor = "green"; \}drawSprites(); \
\}}