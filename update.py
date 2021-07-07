import os

os.system('git add .')

commit= input('Enter commit message')
commitcommand = f'git commit -m "{commit}"'
os.system(commitcommand)