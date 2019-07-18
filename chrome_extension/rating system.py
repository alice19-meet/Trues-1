movies = ("0","1","2","3","4","5")

rating = int(input ("how helpful was our extinstion 0-5 (0 being bad 5 being good): "))

for i in range(1):

    print ("Rating for Extinstion ", movies[rating])
    while rating < 0 or rating > 5:
        ratings = int(input("Enter movie rating: ", rating))

    for j in range(1):
        print ("*"*5,)
