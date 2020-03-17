def solution(hot,k):
    hot.sort()
    cnt = 0
    for i in range(len(hot)-1):
        if hot[i] < k:
            new = hot[i] + hot[i+1]*2
            del hot[:2]
            print(new, hot)
            for j in range(len(hot)-2):
                if hot[j] > new:
                    hot.insert(j, new)
                    break
                else:
                    pass
            cnt+=1
        else:
            break  
    if hot[-1] < k:
        return -1
    return cnt

print(solution([1, 2, 3, 9, 10, 12], 7))
