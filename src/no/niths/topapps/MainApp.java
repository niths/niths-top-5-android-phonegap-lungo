package no.niths.topapps;

import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class MainApp extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/index.html");
    }
}
