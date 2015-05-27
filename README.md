# kiosk-nepal

This is repo contains the static pages component of MapAction's Kiosk for the Nepal 2015 EQ Response. See http://kiosk.mapaction.org/kiosk-nepal/3W/

The rest of this document explains how members of MapAction can update the content of these pages.


One off tasks
-------------
A) Sign up for a Github account. You may need to verify your email by clicking on a link sent to you from GitHub at some point.

B) Send your account name to Andy Smith so that you can be added to the
relevant user group on Github (ie "Contributers")

C) Download and install "Github for Windows" https://windows.github.com/

D) Ensure that Github for Windows is configured with your Github account. See https://help.github.com/articles/getting-started-with-github-for-windows/

E) Create a clone of the "kiosk-nepal" repository (aka the "repo"). Save the clone to somewhere outside of the usual Crash Move Folder. The easiest way to do this is to press
the "Clone in Desktop" button on this page
https://github.com/mapaction/kiosk-nepal


Notes
-----
- In theory it is possible to do all of these steps using just the GUI. However
I have found that GitHub for Windows didn't cope well with the large number of
files. Using the commandline was at least 100x faster.
Notes about command syntax below;
- Any direct quotes from the Git Command windows are quoted with three back
ticks (```) -- though these will not show on Github, but show the commands as fixed-width font text.


Steps for each update
---------------------
1) In Github for Windows, right click on the repo name and select "Open in Git
Shell"

2) Check the status using the command "git status". You should see output as
below
```
mapaction@MA-LAPTOP98 /d/MapAction/github/kiosk-nepal (gh-pages)
$ git status
On branch gh-pages
Your branch is up-to-date with 'origin/gh-pages'.

nothing to commit, working directory clean
```

3) You may want to force an update at this point -- doing so will overwrite any changes in your local copy, but this should be fine if you have not yet copied the files from the CMF (or even if you just want to get back to the 'correct' state as it is on Github). If you want to do it the 'nice' way, omit `--force` and any changes will be merged instead of wiped.
```
git pull --force origin gh-pages
```

4) Copy the full set of files from the CMF into the 3W folder in github clone.
You'll need to substitute the name of the directory where Mappitizer saved its
output. The general robocopy syntax is `robocopy sourcepath destinationpath /mir`
The "/mir" switch means mirror and hence will delete old unused files as well
as copying new files.
```
robocopy Z:\whereever\the\output\files\are\saved 3W /mir
```

5) Using Windows Explorer to check that this has copied as expected, eg that
you've not accidentally created a extra nested 3W folder. The path to
index.html should be "kiosk-nepal/3W/index.html"

6) Tell Git to track *all* of the new files in the 3W folder
```
git add -A
```

7) Commit the changes (eg tell Git that these all of the file changes are all
part of the same update)
```
git commit -m "next attempt to update 3W mapping"
```

8) Double check that everything committed correctly using "git status". You
should get the message below:
```
mapaction@MA-LAPTOP98 /d/MapAction/github/kiosk-nepal (gh-pages)
$ git status
On branch gh-pages
Your branch is ahead of 'origin/gh-pages' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working directory clean
```

9) Finally "Push" (aka sync/upload) the changes to Github.com@
```
git push origin gh-pages
```

10) If this doesn't work for some reason but you are sure that you want to push the local version to Github, you can force it (though be aware this might wipe some changes you haven't fetched if it was a long time since you did the `git pull (--force) origin gh-pages`), just add `--force` after the `push`:
```
git push --force origin gh-pages
```

11) Browse to "kiosk.mapaction.org/kiosk-nepal/3W" and check that everything has
uploaded properly. It is hasn't contact Andy Smith

-- END --
