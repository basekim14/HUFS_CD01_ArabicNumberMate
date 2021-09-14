import json

# 좌표값 정의 함수
def setPosition(value):
    if checkArabicNumber(value['description']):
        return {
            "TEXT"  : value['description'],
            "LEFT_TOP": value['boundingPoly']['vertices'][0],
            "RIGHT_TOP": value['boundingPoly']['vertices'][1],
            "RIGHT_BOTTOM": value['boundingPoly']['vertices'][2],
            "LEFT_BOTTOM":value['boundingPoly']['vertices'][3]
        }
    else:
        return []
    
# 아랍숫자 분별 함수
def checkArabicNumber(text):
    # 페르시안문자를 아랍문자로 치환
    text = text.replace('۹','٩').replace('۸','٨').replace('۷','٧').replace('۶','٦').replace('۵','٥').replace('۴','٤').replace('۳','٣').replace('۲','٢').replace('۱','١').replace('۰','٠')
    # 텍스트에 아랍숫자가 포함되어 있는지 확인 후
    # 포함되어 있으면 true 리턴 , 없으면 false 리턴
    if '٩' in text or '٩' in text or '٨' in text  or '٧' in text  or '٦' in text  or '٥' in text  or '٤' in text  or '٣' in text  or '٢' in text  or '١' in text  or '٠' in text  :
        return True
    else:
        return False
    

with open('data.json', 'rt', encoding='UTF8') as json_file:
    json_data = json.load(json_file)
    print(json_data)
    
    for key, value in enumerate(json_data['responses'][0]['textAnnotations']):
        if key > 0:
            checkval = setPosition(value)
            if checkval:
                print(checkval)
    #json_string = json_data["responses"]
    #print(json_string)

    
