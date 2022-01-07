package com.beacon_learning;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.content.res.Configuration;
import com.facebook.react.ReactActivityDelegate; // <- add this necessary import
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "beacon_learning";
  }

  @Override
   public void onConfigurationChanged(Configuration newConfig) {
    RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
       super.onConfigurationChanged(newConfig);
       Intent intent = new Intent("onConfigurationChanged");
       intent.putExtra("newConfig", newConfig);
       this.sendBroadcast(intent);
   }
}
