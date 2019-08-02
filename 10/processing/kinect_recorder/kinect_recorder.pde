
import org.openkinect.freenect.*;
import org.openkinect.processing.*;
import com.hamoid.*;

VideoExport videoExport;


Kinect kinect;

PImage depthImg;

int minDepth =  0;
int maxDepth = 1200;

float angle;
float[] depthLookUp = new float[2048];


void setup() {
  size(640, 480);
  background(0);

  kinect = new Kinect(this);
  
    //kinect.initVideo();
  //kinect.enableIR(true);
  kinect.initDepth();

  depthImg = new PImage(kinect.width, kinect.height);
  kinect.enableColorDepth(true);
  videoExport = new VideoExport(this, "kinect.mp4");
  videoExport.startMovie();
}

void draw() {
  /*depthImg = kinect.getDepthImage();
  depthImg.loadPixels();
  for (int i = 0; i < depthImg.width * depthImg.height; i++) {
    depthImg.pixels[i] = color(blue(depthImg.pixels[i]), green(depthImg.pixels[i]), red(depthImg.pixels[i]));
  }
  depthImg.updatePixels();
  
  image(depthImg, 0, 0);*/
  
  int[] rawDepth = kinect.getRawDepth();
  
  for (int i=0; i < rawDepth.length; i++) {
    int b = (rawDepth[i] - 512 < 512)? (rawDepth[i] - 512) : 255;
    int g = (rawDepth[i] - 512 < 1024)? (rawDepth[i] - 512) / 2 : 255;
    int r = (rawDepth[i] - 512 < 2048)? (rawDepth[i] - 512) / 4 : 255;
    depthImg.pixels[i] = color(r, g, b);
    //if(rawDepth[i] < 256) depthImg.pixels[i] = color(0, 0, rawDepth[i]);
    //else depthImg.pixels[i] = color(rawDepth[i], rawDepth[i], 255);
  }
  println(rawDepth[0]);

  depthImg.updatePixels();
  image(depthImg, 0, 0);
  
 // image(kinect.getDepthImage(), 0, 0);
  
  
  videoExport.saveFrame();
}


void keyPressed() {
  if (key == 'q') {
    videoExport.endMovie();
    exit();
  }
}
