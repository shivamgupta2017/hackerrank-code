month = []

def updateLeapYear(year):
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        month[2] = 29
    else:
        month[2] = 28

def storeMonth():
    month[1] = 31
    month[2] = 28
    month[3] = 31
    month[4] = 30
    month[5] = 31
    month[6] = 30
    month[7] = 31
    month[8] = 31
    month[9] = 30
    month[10] = 31
    month[11] = 30
    month[12] = 31

def findPrimeDates(d1, m1, y1, d2, m2, y2):
    storeMonth()
    result = 0

    while(True):

        x = d1
        x = x * 100 + m1
        x = x * 10000 + y1

        print('x->',x)

        break

        if x % 4 == 0 and x % 7 == 0:
            result = result + 1

        if d1 == d2 and m1 == m2 and y1 == y2:
            break

        updateLeapYear(y1)

        d1 = d1 + 1
        if d1 > month[m1]:
            m1 = m1 + 1
            d1 = 1
            if m1 > 12:
                y1 =  y1 + 1
                m1 = 1
    return result


findPrimeDates('02', '08', '2015', '04', '09', '2025')

# 25-06-2365 07-09-8847
# 846403


