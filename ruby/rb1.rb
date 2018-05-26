exit, i = 0, 0
while i < 1000
    exit += i if i % 3 == 0 || i % 5 == 0
    i +=1
end
prints exit # => 233168