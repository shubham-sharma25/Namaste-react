Igniting the App:
(making our app ready to be pushed for production)
-building the react app from zero instead of using react-react-app
-react alone doesnt make an app faster

npm:
-it is a node package manager but it doesnt stand for node package manager

Dependency vs devDependencies:
Dev dep is those library/packages which are required for development environment and not in production
to install a package as a dev dep : npm i -D <package>
Q: name some of dev dep & normal dep

Transitive dependency : (dependency within a dependency)
Generally a package/dependency needs a lot of other packages/dependency to be able to run properly . When such package/dependency is installed in our app, then all the sub dependencies are also installed by default and all of these are present on node_modules.
Every installed package in node modules, have their own package.json which tells its own dependencies.

Module bundler:
webpack/parcel/vite

npm i -D parcel : install parcel as dev dependency as we dont want it in prod environment

After installing parcel, we get parcel : "^2.15.2" in our package.json devdependencies

Q: What is this ^ & ~ symbol means ?
A:
^ : Caret symbol : tells npm to automatic upgrade the package to a minor upgrade if its available
~ : tilde symbol : tells npm to automatic upgrade the package to a major upgrade if its available

Which is safer to use : ^ 

package.json : keeps the track of the dependencies & their version used in our app
package-lock.json :
While package.json tells npm to install the available version (minor or major based on symbol), the package-lock.json keeps the exact version of the dependencies as well as the subdependencies which is installed 
E.g.: If today i installed parcel and it by default installed ^2.15.2 , and in pack-lock the version will be written same. 
But when in future parcel releases version 2.15.3, and i will do npm i then the newer version will be installed(due to ^) and the pack.json version will remain the same older one but pack-lock version will be 2.15.3 which is the newer version

Contents of package-lock:
-installed packages and their exact version
-integrity: a hash code to verify the package version installed in prod is same as the version installed in my local

node_modules:
when we install a package using npm , it adds the code of those packages inside our node modules folder, it also add the code of the dependant packages needed by the installed package

.gitIgnore : avoid pushing the unnecessory files to git like node modules etc 

Q: Why dont we push node module to git and why push pack & pack-lock?
A: The pack & pack-lock notes the version of all dependencies needed by our project so this info is sufficient to regenarate the node modules any place we want therefore its no point to push node module which is extremely bulky in size

npm vs npx :
npm installs a package while npx executes/runs a package

Running the app in local using Parcel :
npx parcel <starting point of app>
npx parcel index.html
Explaination : parcel will go to the source file index.html and create a dev build for our app and host that build onto a local server

