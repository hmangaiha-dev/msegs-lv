import os
os.system('npm run production')
os.system('git add .')
print("Adding files \n use git status for status")
commit= input('Enter commit message: ')
commitcommand = f'git commit -m "{commit}"'

os.system(commitcommand)
os.system('git push')


print("GIT UPDATED!!!!")