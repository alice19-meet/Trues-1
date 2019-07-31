import csv
import requests
import re
with open('bias.csv') as csvfile:
	reader = csv.DictReader(csvfile, delimiter="\t")
	for row in reader:
		if row["URL"]:
			a= row['URL'].replace(' ', '')
			r = requests.get(a)
			content = r.content

			x = re.findall("Source:.*(?:\.com|\.net|\.org|\.co|\.tv|\.ca|\.info|\.to|\.news|\.us|\.gov)", content)
			p = re.findall("(?:http:|https:|www).*(?:\.com|\.net|\.org|\.co|\.tv|\.ca|\.info|\.to|\.news|\.us|\.gov)", str(x))
			# print p
			# f = open('example.csv')
			p = p[0].split(' ') if p else None
			p = re.sub("\'|\"|,", "", p[0]) if p else None
			# f.write(p)
			print(p)


