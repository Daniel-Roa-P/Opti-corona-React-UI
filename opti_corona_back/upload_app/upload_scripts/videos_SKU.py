referencias = {'O18412721':'M-beZN9VTtg','O18401591':'QcqiRmqKO7E'}

text_file = open("video-co-es-202404091610.csv", "w")

print(referencias)

for referencia in referencias:
            
    text_file.write(referencia + ',https://youtu.be/' + referencias[referencia] + ',https://i.ytimg.com/vi/' + referencias[referencia] + '/hqdefault.jpg')
    text_file.write('\n')
    
    print(referencia + ',https://youtu.be/' + referencias[referencia] + ',https://i.ytimg.com/vi/' + referencias[referencia] + '/hqdefault.jpg')

text_file.close()