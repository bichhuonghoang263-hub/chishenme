// 默认菜谱数据（带分类）
const defaultRecipes = [
    // === 面食 ===
    {
        id: 1,
        name: "西红柿鸡蛋面",
        emoji: "🍜",
        category: "面食",
        time: "15分钟",
        difficulty: "简单",
        ingredients: [
            { name: "面条", amount: "200克" },
            { name: "鸡蛋", amount: "2个" },
            { name: "西红柿", amount: "2个" },
            { name: "小葱", amount: "1根" }
        ],
        seasonings: [
            { name: "盐", amount: "1茶匙" },
            { name: "生抽", amount: "1汤匙" },
            { name: "香油", amount: "少许" }
        ],
        steps: [
            "西红柿洗净切块，鸡蛋打散备用",
            "锅中热油，倒入蛋液炒熟盛出",
            "锅中再加少许油，放入西红柿炒出汁",
            "加入适量水，大火烧开后煮3分钟",
            "放入面条，煮3-4分钟至熟",
            "加入炒好的鸡蛋，调味后撒上葱花即可"
        ],
        tips: "西红柿要多炒一会，炒出汁水汤才好喝。面条可以买挂面或者手擀面。"
    },
    {
        id: 2,
        name: "肉丝炒面",
        emoji: "🍝",
        category: "面食",
        time: "20分钟",
        difficulty: "简单",
        ingredients: [
            { name: "面条", amount: "200克" },
            { name: "猪肉丝", amount: "100克" },
            { name: "绿豆芽", amount: "100克" },
            { name: "韭菜", amount: "50克" },
            { name: "胡萝卜", amount: "半根" }
        ],
        seasonings: [
            { name: "生抽", amount: "2汤匙" },
            { name: "老抽", amount: "1茶匙" },
            { name: "盐", amount: "适量" },
            { name: "料酒", amount: "1汤匙" }
        ],
        steps: [
            "面条煮至八分熟，捞出过凉水沥干",
            "猪肉丝用料酒和少许生抽腌制10分钟",
            "胡萝卜切丝，韭菜切段",
            "热锅冷油，放入肉丝炒至变色",
            "加入胡萝卜丝和豆芽翻炒",
            "倒入面条，加生抽、老抽调味",
            "大火快速翻炒，最后加入韭菜炒匀即可"
        ],
        tips: "面条不要煮太熟，炒的时候才更有嚼劲。全程大火快炒，保持食材脆嫩。"
    },
    {
        id: 3,
        name: "牛肉拉面",
        emoji: "🍜",
        category: "面食",
        time: "60分钟",
        difficulty: "中等",
        ingredients: [
            { name: "拉面", amount: "300克" },
            { name: "牛腩", amount: "400克" },
            { name: "白萝卜", amount: "半根" },
            { name: "香菜", amount: "适量" }
        ],
        seasonings: [
            { name: "生抽", amount: "2汤匙" },
            { name: "料酒", amount: "2汤匙" },
            { name: "盐", amount: "适量" },
            { name: "八角", amount: "2个" },
            { name: "桂皮", amount: "1小块" }
        ],
        steps: [
            "牛腩切块，焯水去血沫",
            "锅中热油，放入牛腩翻炒",
            "加入料酒、生抽、八角、桂皮",
            "加入热水没过牛肉，大火烧开转小火炖40分钟",
            "白萝卜切块，加入汤中继续炖15分钟",
            "另起锅煮面，面条熟后捞出",
            "碗中盛入面条，浇上牛肉汤和肉，撒上香菜即可"
        ],
        tips: "牛肉要选牛腩，炖出来软烂好吃。白萝卜可以去除牛肉的腥味。"
    },
    {
        id: 4,
        name: "阳春面",
        emoji: "🍜",
        category: "面食",
        time: "10分钟",
        difficulty: "简单",
        ingredients: [
            { name: "细面条", amount: "150克" },
            { name: "小葱", amount: "2根" }
        ],
        seasonings: [
            { name: "猪油", amount: "1汤匙" },
            { name: "生抽", amount: "2汤匙" },
            { name: "盐", amount: "1茶匙" }
        ],
        steps: [
            "小葱切成葱花",
            "碗中放入猪油、生抽、盐、一半葱花",
            "煮面水先舀一勺冲入碗中调成汤底",
            "面条下入锅中煮熟",
            "面条捞入碗中，再舀一勺面汤",
            "撒上剩余葱花即可"
        ],
        tips: "猪油是阳春面的灵魂，没有猪油可以用香油代替。汤底要用煮面的热汤冲开才香。"
    },
    // === 炒菜 ===
    {
        id: 5,
        name: "番茄炒蛋",
        emoji: "🍅",
        category: "炒菜",
        time: "15分钟",
        difficulty: "简单",
        ingredients: [
            { name: "番茄", amount: "2个（约400克）" },
            { name: "鸡蛋", amount: "3个" },
            { name: "小葱", amount: "1根" }
        ],
        seasonings: [
            { name: "盐", amount: "1茶匙" },
            { name: "白糖", amount: "1茶匙" },
            { name: "食用油", amount: "2汤匙" }
        ],
        steps: [
            "番茄洗净，用开水烫一下，去皮后切成块状",
            "鸡蛋打入碗中，加半茶匙盐，搅拌均匀",
            "小葱洗净，切成葱花",
            "热锅冷油，油热后倒入蛋液，快速炒至半熟盛出",
            "锅中再加少许油，放入番茄块翻炒出汁",
            "加入半茶匙盐和1茶匙白糖，翻炒均匀",
            "倒入炒好的鸡蛋，快速翻炒均匀",
            "撒上葱花，出锅装盘"
        ],
        tips: "番茄用开水烫一下更容易去皮。先炒番茄出汁再倒鸡蛋，这样鸡蛋更入味。"
    },
    {
        id: 6,
        name: "宫保鸡丁",
        emoji: "🍗",
        category: "炒菜",
        time: "30分钟",
        difficulty: "中等",
        ingredients: [
            { name: "鸡胸肉", amount: "300克（约0.6斤）" },
            { name: "花生米", amount: "50克" },
            { name: "干辣椒", amount: "10个" },
            { name: "花椒", amount: "1小把" },
            { name: "大葱", amount: "1根" },
            { name: "蒜", amount: "3瓣" },
            { name: "姜", amount: "1小块" }
        ],
        seasonings: [
            { name: "生抽", amount: "1汤匙" },
            { name: "老抽", amount: "1茶匙" },
            { name: "料酒", amount: "1汤匙" },
            { name: "香醋", amount: "1汤匙" },
            { name: "白糖", amount: "1汤匙" },
            { name: "淀粉", amount: "1茶匙" },
            { name: "盐", amount: "适量" }
        ],
        steps: [
            "鸡胸肉切成1.5cm见方的丁，用料酒、半茶匙盐、淀粉腌制15分钟",
            "花生米炸至金黄酥脆，捞出晾凉",
            "大葱切段，蒜和姜切末",
            "调料汁：将生抽、老抽、香醋、白糖、半茶匙盐调成汁备用",
            "热锅冷油，下花椒和干辣椒小火炒出香味",
            "放入鸡丁大火炒至变色",
            "加入姜蒜末炒香",
            "倒入调好的料汁，快速翻炒均匀",
            "加入炸好的花生米和葱段，炒匀即可出锅"
        ],
        tips: "花生米要最后放，保持酥脆。调料汁提前调好，避免炒的时候手忙脚乱。"
    },
    {
        id: 7,
        name: "鱼香肉丝",
        emoji: "🥢",
        category: "炒菜",
        time: "25分钟",
        difficulty: "中等",
        ingredients: [
            { name: "猪里脊肉", amount: "250克（约0.5斤）" },
            { name: "胡萝卜", amount: "半根" },
            { name: "青椒", amount: "1个" },
            { name: "木耳", amount: "适量（泡发）" },
            { name: "大蒜", amount: "3瓣" },
            { name: "生姜", amount: "1小块" }
        ],
        seasonings: [
            { name: "生抽", amount: "1汤匙" },
            { name: "老抽", amount: "半茶匙" },
            { name: "醋", amount: "1.5汤匙" },
            { name: "白糖", amount: "1汤匙" },
            { name: "料酒", amount: "1汤匙" },
            { name: "豆瓣酱", amount: "1汤匙" }
        ],
        steps: [
            "猪肉切成细丝，用料酒、半茶匙盐、淀粉腌制15分钟",
            "胡萝卜、青椒切丝，木耳切丝",
            "大蒜和生姜切末",
            "调料汁：将生抽、老抽、醋、白糖、半茶匙盐调成汁",
            "热锅冷油，放入肉丝炒至变色盛出",
            "锅中再加少许油，放入豆瓣酱炒出红油",
            "加入姜蒜末炒香",
            "倒入胡萝卜丝和木耳丝翻炒",
            "加入肉丝和青椒丝，翻炒均匀",
            "倒入调好的料汁，大火快速翻炒即可出锅"
        ],
        tips: "鱼香肉丝的关键是鱼香汁，酸甜比例要掌握好。所有食材切成丝状，大小均匀。"
    },
    {
        id: 8,
        name: "青椒肉丝",
        emoji: "🫑",
        category: "炒菜",
        time: "20分钟",
        difficulty: "简单",
        ingredients: [
            { name: "猪肉丝", amount: "200克" },
            { name: "青椒", amount: "2个" },
            { name: "大蒜", amount: "2瓣" }
        ],
        seasonings: [
            { name: "生抽", amount: "1.5汤匙" },
            { name: "料酒", amount: "1汤匙" },
            { name: "淀粉", amount: "1茶匙" },
            { name: "盐", amount: "适量" }
        ],
        steps: [
            "猪肉丝用料酒、生抽、淀粉腌制10分钟",
            "青椒去籽切丝，大蒜切片",
            "热锅冷油，放入肉丝炒至变色盛出",
            "锅中再加少许油，放入蒜片爆香",
            "倒入青椒丝大火炒至断生",
            "加入肉丝翻炒均匀，调味即可出锅"
        ],
        tips: "肉丝顺着纹路切，炒出来更嫩。青椒不要炒太老，保持脆嫩口感。"
    },
    {
        id: 9,
        name: "酸辣土豆丝",
        emoji: "🥔",
        category: "炒菜",
        time: "15分钟",
        difficulty: "简单",
        ingredients: [
            { name: "土豆", amount: "2个（约400克）" },
            { name: "青椒", amount: "1个" },
            { name: "干红辣椒", amount: "5-6个" },
            { name: "大蒜", amount: "2瓣" }
        ],
        seasonings: [
            { name: "白醋", amount: "1.5汤匙" },
            { name: "盐", amount: "1茶匙" },
            { name: "白糖", amount: "半茶匙" },
            { name: "花椒", amount: "一小把" }
        ],
        steps: [
            "土豆去皮，切成细丝，放入水中浸泡去除多余淀粉",
            "青椒去籽切丝，干辣椒剪段，大蒜切片",
            "热锅冷油，放入花椒小火炸出香味后捞出",
            "放入干辣椒段和蒜片爆香",
            "倒入土豆丝，大火快速翻炒约1分钟",
            "加入青椒丝继续翻炒",
            "加入盐、白糖、白醋，翻炒均匀即可出锅"
        ],
        tips: "土豆丝切得越细越好口感更好，切好后一定要泡水去除淀粉。"
    },
    // === 汤类 ===
    {
        id: 10,
        name: "紫菜蛋花汤",
        emoji: "🥣",
        category: "汤类",
        time: "10分钟",
        difficulty: "简单",
        ingredients: [
            { name: "鸡蛋", amount: "2个" },
            { name: "紫菜", amount: "1张" },
            { name: "小葱", amount: "1根" }
        ],
        seasonings: [
            { name: "盐", amount: "1茶匙" },
            { name: "香油", amount: "几滴" },
            { name: "胡椒粉", amount: "少许" }
        ],
        steps: [
            "紫菜撕成小块，鸡蛋打散，小葱切葱花",
            "锅中加水烧开",
            "放入紫菜煮1分钟",
            "加盐调味",
            "淋入蛋液，用筷子轻轻搅散成蛋花",
            "关火，撒上葱花和胡椒粉，滴几滴香油即可"
        ],
        tips: "蛋液淋入后不要马上搅动，等蛋液稍凝固后再轻轻搅动，蛋花更漂亮。"
    },
    {
        id: 11,
        name: "冬瓜排骨汤",
        emoji: "🍖",
        category: "汤类",
        time: "90分钟",
        difficulty: "简单",
        ingredients: [
            { name: "排骨", amount: "500克（1斤）" },
            { name: "冬瓜", amount: "300克" },
            { name: "生姜", amount: "3-4片" },
            { name: "小葱", amount: "1根" }
        ],
        seasonings: [
            { name: "料酒", amount: "1汤匙" },
            { name: "盐", amount: "1茶匙" }
        ],
        steps: [
            "排骨冷水下锅焯水，煮出血沫后捞出冲洗干净",
            "冬瓜去皮去瓤，切成块状",
            "锅中加水烧开，放入排骨、姜片、料酒",
            "大火烧开后转小火煮40分钟",
            "加入冬瓜块继续煮15分钟",
            "加盐调味，撒上葱花即可"
        ],
        tips: "排骨一定要焯水，汤才清澈。冬瓜不要煮太久，以免煮烂。"
    },
    {
        id: 12,
        name: "番茄牛腩汤",
        emoji: "🍅",
        category: "汤类",
        time: "90分钟",
        difficulty: "中等",
        ingredients: [
            { name: "牛腩", amount: "500克（1斤）" },
            { name: "番茄", amount: "3个" },
            { name: "土豆", amount: "1个" },
            { name: "洋葱", amount: "半个" }
        ],
        seasonings: [
            { name: "生抽", amount: "2汤匙" },
            { name: "料酒", amount: "2汤匙" },
            { name: "盐", amount: "适量" }
        ],
        steps: [
            "牛腩切块，焯水去血沫",
            "番茄去皮切块，土豆去皮切块，洋葱切丁",
            "热锅冷油，放入牛腩翻炒至表面微焦",
            "加入洋葱丁炒香",
            "加入料酒、生抽翻炒均匀",
            "加入热水没过牛肉，大火烧开转小火炖40分钟",
            "加入番茄和土豆，继续炖20分钟",
            "加盐调味即可"
        ],
        tips: "番茄要选熟透的，更容易煮烂出汁。可以提前一天炖，第二天热了更好吃。"
    },
    // === 凉菜 ===
    {
        id: 13,
        name: "拍黄瓜",
        emoji: "🥒",
        category: "凉菜",
        time: "10分钟",
        difficulty: "简单",
        ingredients: [
            { name: "黄瓜", amount: "2根" },
            { name: "大蒜", amount: "3瓣" }
        ],
        seasonings: [
            { name: "生抽", amount: "2汤匙" },
            { name: "香醋", amount: "1汤匙" },
            { name: "香油", amount: "1茶匙" },
            { name: "盐", amount: "适量" },
            { name: "辣椒油", amount: "适量" }
        ],
        steps: [
            "黄瓜洗净，用刀背拍裂后切段",
            "大蒜切成蒜末",
            "黄瓜放入碗中，加入蒜末",
            "加入生抽、香醋、香油、盐、辣椒油",
            "搅拌均匀即可食用"
        ],
        tips: "用刀背拍黄瓜比切的味道更好，更容易入味。可以加点花生碎增加口感。"
    },
    {
        id: 14,
        name: "凉拌木耳",
        emoji: "🍄",
        category: "凉菜",
        time: "15分钟",
        difficulty: "简单",
        ingredients: [
            { name: "干木耳", amount: "50克" },
            { name: "黄瓜", amount: "半根" },
            { name: "胡萝卜", amount: "半根" },
            { name: "大蒜", amount: "3瓣" }
        ],
        seasonings: [
            { name: "生抽", amount: "2汤匙" },
            { name: "香醋", amount: "1汤匙" },
            { name: "辣椒油", amount: "适量" },
            { name: "香油", amount: "少许" }
        ],
        steps: [
            "木耳提前泡发，焯水2分钟后捞出过凉水",
            "黄瓜和胡萝卜切丝，大蒜切末",
            "所有食材放入碗中",
            "加入生抽、香醋、辣椒油、香油、盐",
            "拌匀即可食用"
        ],
        tips: "木耳一定要焯熟，凉拌才安全。可以加点香菜和葱花增香。"
    },
    // === 主食 ===
    {
        id: 15,
        name: "蛋炒饭",
        emoji: "🍚",
        category: "主食",
        time: "15分钟",
        difficulty: "简单",
        ingredients: [
            { name: "米饭", amount: "1碗（隔夜饭最好）" },
            { name: "鸡蛋", amount: "2个" },
            { name: "小葱", amount: "1根" }
        ],
        seasonings: [
            { name: "盐", amount: "1茶匙" },
            { name: "生抽", amount: "1茶匙" },
            { name: "食用油", amount: "适量" }
        ],
        steps: [
            "鸡蛋打散，小葱切成葱花",
            "热锅冷油，倒入蛋液炒成碎块盛出",
            "锅中再加少许油，放入米饭炒散",
            "加入盐和生抽调味",
            "倒入炒蛋，翻炒均匀",
            "撒上葱花，炒匀即可出锅"
        ],
        tips: "隔夜饭炒出来颗粒分明更好吃。炒饭要用大火，炒出香味。"
    },
    {
        id: 16,
        name: "扬州炒饭",
        emoji: "🍚",
        category: "主食",
        time: "20分钟",
        difficulty: "中等",
        ingredients: [
            { name: "米饭", amount: "2碗" },
            { name: "鸡蛋", amount: "3个" },
            { name: "火腿丁", amount: "50克" },
            { name: "虾仁", amount: "50克" },
            { name: "青豆", amount: "30克" },
            { name: "胡萝卜丁", amount: "30克" }
        ],
        seasonings: [
            { name: "盐", amount: "1茶匙" },
            { name: "生抽", amount: "1汤匙" },
            { name: "料酒", amount: "1茶匙" }
        ],
        steps: [
            "虾仁用料酒腌制10分钟",
            "鸡蛋打散炒成碎块盛出",
            "热锅冷油，放入虾仁炒变色盛出",
            "锅中加少许油，放入火腿丁、青豆、胡萝卜丁翻炒",
            "倒入米饭炒散",
            "加入炒蛋和虾仁，加盐和生抽调味",
            "大火翻炒均匀即可出锅"
        ],
        tips: "食材要切成小丁，和米饭大小差不多。所有食材要先炒熟，最后一起炒制。"
    }
];

// API 配置
const API_CONFIG = {
    baseUrl: 'https://api.siliconflow.cn/v1/images/generations',
    chatUrl: 'https://api.siliconflow.cn/v1/chat/completions',
    apiKey: 'sk-ubyckafuefxgivyggjliwtnphyoeavddkkupnwubvxyfrzjn',
    imageModel: 'Kwai-Kolors/Kolors',
    chatModel: 'Pro/zai-org/GLM-4.7',
    imageSize: '1024x576' // 16:9 比例
};

// 分类列表
const categories = ["面食", "炒菜", "汤类", "凉菜", "主食", "甜品", "小吃", "其他"];

// 全局变量
let recipes = [];
let currentCategory = "all";
let currentRecipeId = null;
let deleteRecipeId = null;

// 图片缓存
let stepImageCache = {};
// 提示词缓存
let stepPromptCache = {};
// 当前正在编辑的步骤索引
let editingStepIndex = null;

// 加载图片缓存
function loadImageCache() {
    const cached = localStorage.getItem('stepImageCache');
    if (cached) {
        stepImageCache = JSON.parse(cached);
    }
    // 加载提示词缓存
    const promptCached = localStorage.getItem('stepPromptCache');
    if (promptCached) {
        stepPromptCache = JSON.parse(promptCached);
    }
}

// 保存图片缓存
function saveImageCache() {
    localStorage.setItem('stepImageCache', JSON.stringify(stepImageCache));
}

// 保存提示词缓存
function savePromptCache() {
    localStorage.setItem('stepPromptCache', JSON.stringify(stepPromptCache));
}

// 生成图片提示词
async function generateImagePrompt(recipeName, stepText, stepIndex, totalSteps) {
    const systemPrompt = `你是一个专业的烹饪摄影提示词专家。你的任务是将中文烹饪步骤改写成高质量的英文图片生成提示词。

要求：
1. 描述要具体、生动，包含食材、动作、场景细节
2. 突出视觉元素：颜色、质感、光线、构图
3. 适合专业美食摄影风格
4. 提示词要简洁但信息丰富，控制在100词以内
5. 只返回提示词，不要有其他解释文字

输出格式：直接返回英文提示词，不要有引号或额外说明`;

    const userPrompt = `菜名：${recipeName}
当前步骤（第${stepIndex + 1}步，共${totalSteps}步）：${stepText}

请为这个步骤生成一个专业的英文图片生成提示词。`;

    try {
        const response = await fetch(API_CONFIG.chatUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: API_CONFIG.chatModel,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('混元API错误:', errorText);
            // 失败时使用简单提示词
            return getFallbackPrompt(recipeName, stepText, stepIndex);
        }

        const data = await response.json();
        let prompt = data.choices[0].message.content.trim();

        // 清理可能的引号和多余字符
        prompt = prompt.replace(/^["']|["']$/g, '').trim();

        console.log(`步骤${stepIndex + 1} AI提示词:`, prompt);
        return prompt;
    } catch (error) {
        console.error('生成AI提示词失败，使用备用方案:', error);
        return getFallbackPrompt(recipeName, stepText, stepIndex);
    }
}

// 保存提示词到缓存
function savePrompt(recipeId, stepIndex, prompt) {
    const key = getStepImageKey(recipeId, stepIndex);
    stepPromptCache[key] = prompt;
    savePromptCache();
}

// 备用简单提示词生成
function getFallbackPrompt(recipeName, stepText, stepIndex) {
    const cleanStep = stepText
        .replace(/[，。！？、；：""''（）【】《》]/g, ',')
        .substring(0, 80);

    return `Professional Chinese cooking photography: ${recipeName}, step ${stepIndex + 1}, ${cleanStep}. Bright kitchen lighting, high quality, detailed food photography, 16:9 aspect ratio`;
}

// 生成单张图片（两阶段：先获取AI提示词，再生成图片）
async function generateSingleImage(recipeName, stepText, stepIndex, totalSteps, customPrompt = null) {
    const maxRetries = 3;
    let retryCount = 0;
    let finalPrompt = customPrompt;

    while (retryCount < maxRetries) {
        try {
            console.log(`开始处理步骤${stepIndex + 1}: ${stepText}`);

            // 第一阶段：用混元模型生成优质提示词（如果没有自定义提示词）
            if (!finalPrompt) {
                console.log('第一阶段：生成AI提示词...');
                finalPrompt = await generateImagePrompt(recipeName, stepText, stepIndex, totalSteps);
            }

            // 保存提示词
            savePrompt(currentRecipeId, stepIndex, finalPrompt);

            // 第二阶段：用提示词生成图片
            console.log('第二阶段：生成图片...');
            console.log('使用提示词:', finalPrompt);

            const requestBody = {
                model: API_CONFIG.imageModel,
                prompt: finalPrompt,
                image_size: API_CONFIG.imageSize,
                batch_size: 1,
                num_inference_steps: 20,
                guidance_scale: 7.5
            };

            const response = await fetch(API_CONFIG.baseUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorText = await response.text();

                // 处理速率限制 (429)
                if (response.status === 429) {
                    retryCount++;
                    if (retryCount < maxRetries) {
                        const waitTime = Math.pow(2, retryCount) * 2000;
                        console.log(`⏳ 速率限制，等待 ${waitTime / 1000} 秒后重试 (${retryCount}/${maxRetries})...`);

                        const placeholder = document.getElementById(`placeholder-${stepIndex}`);
                        if (placeholder) {
                            placeholder.innerHTML = `<div class="loading-spinner"></div><span style="margin-left: 10px;">排队中... (${retryCount}/${maxRetries})</span>`;
                        }

                        await new Promise(resolve => setTimeout(resolve, waitTime));
                        continue;
                    }
                }

                console.error('图片API错误:', errorText);
                throw new Error(`图片生成失败 (HTTP ${response.status})`);
            }

            const data = await response.json();
            if (!data.images || !data.images[0] || !data.images[0].url) {
                throw new Error('API 返回数据格式异常');
            }

            console.log(`步骤${stepIndex + 1}图片生成成功`);
            return data.images[0].url;

        } catch (error) {
            if (retryCount >= maxRetries - 1 || !error.message.includes('429')) {
                console.error(`步骤${stepIndex + 1}生成失败:`, error);
                throw error;
            }
            retryCount++;
        }
    }

    throw new Error('超过最大重试次数');
}

// 获取步骤图片缓存键
function getStepImageKey(recipeId, stepIndex) {
    return `recipe_${recipeId}_step_${stepIndex}`;
}

// 生成所有步骤图片
async function generateAllStepImages() {
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe || !recipe.steps || recipe.steps.length === 0) {
        return;
    }

    const btn = document.getElementById('generateImagesBtn');
    const originalText = btn.textContent;
    btn.disabled = true;

    const steps = recipe.steps;
    let successCount = 0;
    let failCount = 0;
    let totalCount = 0;

    for (let i = 0; i < steps.length; i++) {
        const cacheKey = getStepImageKey(recipe.id, i);

        // 如果已有缓存，跳过
        if (stepImageCache[cacheKey]) {
            successCount++;
            continue;
        }

        totalCount++;

        try {
            btn.textContent = `🔄 生成中... (${i + 1}/${steps.length})`;
            const imageUrl = await generateSingleImage(recipe.name, steps[i], i, steps.length);
            stepImageCache[cacheKey] = imageUrl;
            successCount++;

            // 每生成一张就刷新显示
            saveImageCache();
            showRecipe(currentRecipeId);

            // 请求之间添加延迟，避免触发速率限制
            if (i < steps.length - 1) {
                const nextCacheKey = getStepImageKey(recipe.id, i + 1);
                if (!stepImageCache[nextCacheKey]) {
                    console.log('⏸️ 等待 3 秒后生成下一张...');
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }
        } catch (error) {
            console.error(`步骤 ${i + 1} 图片生成失败:`, error);
            failCount++;

            if (i === 0) {
                btn.disabled = false;
                btn.textContent = originalText;
                alert('生成图片失败: ' + error.message + '\n\n请稍后重试或检查控制台 (F12)');
                return;
            }
        }
    }

    btn.disabled = false;
    btn.textContent = originalText;

    // 最终结果提示
    if (totalCount > 0) {
        if (failCount === 0) {
            console.log(`✅ 成功生成 ${successCount} 张图片！`);
        } else {
            console.log(`⚠️ 生成完成：成功 ${successCount} 张，失败 ${failCount} 张`);
        }
    }
}

// 生成单个步骤图片
async function generateSingleStepImage(stepIndex) {
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return;

    const cacheKey = getStepImageKey(recipe.id, stepIndex);
    const step = recipe.steps[stepIndex];

    const maxRetries = 3;
    let retryCount = 0;

    while (retryCount < maxRetries) {
        try {
            // 显示加载状态
            const placeholder = document.getElementById(`placeholder-${stepIndex}`);
            if (placeholder) {
                placeholder.innerHTML = '<div class="loading-spinner"></div><span style="margin-left: 10px;">AI分析中...</span>';
                placeholder.style.cursor = 'wait';
                placeholder.style.flexDirection = 'row';
            }

            const imageUrl = await generateSingleImage(recipe.name, step, stepIndex, recipe.steps.length);
            stepImageCache[cacheKey] = imageUrl;
            saveImageCache();

            // 刷新显示
            showRecipe(currentRecipeId);
            return; // 成功则退出
        } catch (error) {
            console.error('生成图片失败:', error);
            retryCount++;

            if (retryCount >= maxRetries) {
                // 最终失败
                const placeholder = document.getElementById(`placeholder-${stepIndex}`);
                if (placeholder) {
                    placeholder.innerHTML = '🔄 点击重试';
                    placeholder.style.cursor = 'pointer';
                    placeholder.onclick = () => generateSingleStepImage(stepIndex);
                    placeholder.style.flexDirection = '';
                }
            } else {
                // 更新重试状态
                const placeholder = document.getElementById(`placeholder-${stepIndex}`);
                if (placeholder) {
                    const waitTime = Math.pow(2, retryCount);
                    placeholder.innerHTML = `<span style="font-size: 0.85rem;">⏳ 速率限制，${waitTime}秒后重试... (${retryCount}/${maxRetries})</span>`;
                }

                // 等待后重试
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
            }
        }
    }
}

// 从 localStorage 加载数据
function loadRecipes() {
    try {
        const saved = localStorage.getItem('myRecipes');
        if (saved) {
            const userRecipes = JSON.parse(saved);
            recipes = [...defaultRecipes, ...userRecipes];
        } else {
            recipes = [...defaultRecipes];
        }
    } catch (error) {
        console.error('加载用户菜谱失败，使用默认菜谱:', error);
        // 清除损坏的数据
        localStorage.removeItem('myRecipes');
        recipes = [...defaultRecipes];
    }
}

// 保存用户数据到 localStorage
function saveUserRecipes(userRecipes) {
    localStorage.setItem('myRecipes', JSON.stringify(userRecipes));
}

// 获取用户添加的菜谱
function getUserRecipes() {
    return recipes.filter(r => r.id > 1000);
}

// 生成新 ID
function generateId() {
    const userRecipes = getUserRecipes();
    if (userRecipes.length === 0) return 1001;
    return Math.max(...userRecipes.map(r => r.id)) + 1;
}

// 渲染分类导航
function renderCategoryNav() {
    const nav = document.getElementById('categoryNav');
    nav.innerHTML = `<button class="category-btn ${currentCategory === 'all' ? 'active' : ''}" onclick="filterCategory('all')">全部</button>` +
        categories.map(cat => `
            <button class="category-btn ${currentCategory === cat ? 'active' : ''}" onclick="filterCategory('${cat}')">${cat}</button>
        `).join('');
}

// 筛选分类
function filterCategory(category) {
    currentCategory = category;
    renderCategoryNav();
    renderDishList();
}

// 渲染菜品列表
function renderDishList() {
    const dishGrid = document.getElementById('dishGrid');
    if (!dishGrid) {
        console.error('找不到 dishGrid 元素');
        return;
    }

    console.log('渲染菜品列表，当前菜谱数量:', recipes.length);

    let filteredRecipes = recipes;

    if (currentCategory !== 'all') {
        filteredRecipes = recipes.filter(r => r.category === currentCategory);
    }

    console.log('筛选后菜谱数量:', filteredRecipes.length, '分类:', currentCategory);

    if (filteredRecipes.length === 0) {
        dishGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #999;">
                <p style="font-size: 3rem; margin-bottom: 10px;">🍳</p>
                <p>该分类还没有菜谱，点击上方按钮添加吧！</p>
            </div>
        `;
        return;
    }

    dishGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="dish-card" onclick="showRecipe(${recipe.id})">
            <span class="dish-category-tag">${recipe.category}</span>
            <div class="dish-emoji">${recipe.emoji || '🍽️'}</div>
            <div class="dish-name">${recipe.name}</div>
        </div>
    `).join('');

    console.log('菜品列表渲染完成');
}

// 显示菜谱详情
function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    currentRecipeId = id;

    document.getElementById('dishSelection').style.display = 'none';
    document.getElementById('recipeContent').style.display = 'block';

    document.getElementById('recipeTitle').textContent = (recipe.emoji || '🍽️') + ' ' + recipe.name;
    document.getElementById('recipeTime').textContent = '⏱ ' + (recipe.time || '未设置');
    document.getElementById('recipeDifficulty').textContent = '📊 ' + (recipe.difficulty || '未设置');
    document.getElementById('recipeCategory').textContent = '🏷️ ' + (recipe.category || '其他');

    // 食材列表
    document.getElementById('ingredientsList').innerHTML = (recipe.ingredients || []).map(item => `
        <div class="ingredient-item">
            <span class="ingredient-name">${item.name}</span>
            <span class="ingredient-amount">${item.amount}</span>
        </div>
    `).join('');

    // 调料列表
    document.getElementById('seasoningsList').innerHTML = (recipe.seasonings || []).map(item => `
        <div class="ingredient-item">
            <span class="ingredient-name">${item.name}</span>
            <span class="ingredient-amount">${item.amount}</span>
        </div>
    `).join('');

    // 制作步骤
    document.getElementById('stepsList').innerHTML = (recipe.steps || []).map((step, index) => {
        const cacheKey = getStepImageKey(recipe.id, index);
        const imageUrl = stepImageCache[cacheKey];
        const prompt = stepPromptCache[cacheKey] || '';

        let imageHtml = '';
        if (imageUrl) {
            // 已生成图片：显示图片 + 删除按钮 + 提示词 + 重新生成按钮
            imageHtml = `
                <div class="step-image-wrapper">
                    <button class="delete-image-btn" onclick="deleteStepImage(${index})" title="删除图片">🗑️</button>
                    <img src="${imageUrl}" alt="步骤${index + 1}" class="step-image" loading="lazy">
                </div>
                ${prompt ? `
                    <div class="step-prompt">
                        <div class="step-prompt-label">📝 图片提示词</div>
                        <div class="step-prompt-text">${prompt}</div>
                        <button class="action-btn" style="margin-top: 8px; padding: 6px 12px; font-size: 0.8rem;" onclick="openPromptModal(${index})">✏️ 修改提示词重新生成</button>
                    </div>
                ` : `
                    <div class="step-prompt">
                        <button class="action-btn" style="padding: 6px 12px; font-size: 0.8rem;" onclick="openPromptModal(${index})">✏️ 修改提示词重新生成</button>
                    </div>
                `}
            `;
        } else {
            // 未生成图片：显示占位符
            const isFirst = index === 0;
            const statusText = isFirst ? '正在准备...' : '等待中...';

            imageHtml = `
                <div class="step-image-container">
                    <div class="step-image-placeholder" id="placeholder-${index}">
                        ${isFirst ?
                            '<div class="loading-spinner" style="width: 20px; height: 20px; border-width: 2px;"></div>' +
                            '<span style="margin-left: 10px; font-size: 0.85rem;">正在生成...</span>'
                            :
                            '<span style="font-size: 0.85rem;">⏳ ' + statusText + '</span>'
                        }
                    </div>
                </div>
            `;
        }

        return `
            <div class="step-item">
                <div class="step-content">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-text">${step}</span>
                </div>
                ${imageHtml}
            </div>
        `;
    }).join('');

    // 小贴士
    const tipsSection = document.getElementById('tipsSection');
    if (recipe.tips) {
        tipsSection.style.display = 'block';
        document.getElementById('tipsContent').textContent = recipe.tips;
    } else {
        tipsSection.style.display = 'none';
    }

    // 显示/隐藏编辑删除按钮（只有用户添加的才能编辑删除）
    const isUserRecipe = recipe.id > 1000;
    document.querySelector('.recipe-actions').style.display = isUserRecipe ? 'flex' : 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 自动开始生成图片（如果没有缓存的话）
    // 使用 setTimeout 避免阻塞页面渲染
    setTimeout(() => {
        generateAllStepImages();
    }, 500);
}

// 返回选择
function goBack() {
    document.getElementById('recipeContent').style.display = 'none';
    document.getElementById('dishSelection').style.display = 'block';
    currentRecipeId = null;
}

// 打开添加模态框
function openAddModal() {
    document.getElementById('modalTitle').textContent = '添加菜谱';
    document.getElementById('editRecipeId').value = '';
    document.querySelector('.recipe-form').reset();
    document.getElementById('recipeModal').classList.add('active');
}

// 编辑当前菜谱
function editCurrentRecipe() {
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return;

    document.getElementById('modalTitle').textContent = '编辑菜谱';
    document.getElementById('editRecipeId').value = recipe.id;
    document.getElementById('recipeName').value = recipe.name;
    document.getElementById('recipeEmoji').value = recipe.emoji || '';
    document.getElementById('recipeCategory').value = recipe.category;
    document.getElementById('recipeDifficultyInput').value = recipe.difficulty || '简单';
    document.getElementById('recipeTimeInput').value = recipe.time || '';

    document.getElementById('recipeIngredients').value = (recipe.ingredients || []).map(i => `${i.name} ${i.amount}`).join('\n');
    document.getElementById('recipeSeasonings').value = (recipe.seasonings || []).map(i => `${i.name} ${i.amount}`).join('\n');
    document.getElementById('recipeSteps').value = (recipe.steps || []).join('\n');
    document.getElementById('recipeTips').value = recipe.tips || '';

    document.getElementById('recipeModal').classList.add('active');
}

// 关闭模态框
function closeModal() {
    document.getElementById('recipeModal').classList.remove('active');
}

// 保存菜谱
function saveRecipe(event) {
    event.preventDefault();

    const editId = document.getElementById('editRecipeId').value;
    const name = document.getElementById('recipeName').value.trim();
    const emoji = document.getElementById('recipeEmoji').value.trim() || '🍽️';
    const category = document.getElementById('recipeCategory').value;
    const difficulty = document.getElementById('recipeDifficultyInput').value;
    const time = document.getElementById('recipeTimeInput').value.trim();

    // 解析食材
    const ingredientsText = document.getElementById('recipeIngredients').value.trim();
    const ingredients = ingredientsText.split('\n')
        .filter(line => line.trim())
        .map(line => {
            const parts = line.trim().split(/\s+/);
            const amount = parts.pop();
            const name = parts.join(' ');
            return { name, amount };
        });

    // 解析调料
    const seasoningsText = document.getElementById('recipeSeasonings').value.trim();
    const seasonings = seasoningsText.split('\n')
        .filter(line => line.trim())
        .map(line => {
            const parts = line.trim().split(/\s+/);
            const amount = parts.pop();
            const name = parts.join(' ');
            return { name, amount };
        });

    // 解析步骤
    const stepsText = document.getElementById('recipeSteps').value.trim();
    const steps = stepsText.split('\n').filter(line => line.trim());

    const tips = document.getElementById('recipeTips').value.trim();

    const recipeData = {
        name,
        emoji,
        category,
        difficulty,
        time,
        ingredients,
        seasonings,
        steps,
        tips
    };

    if (editId) {
        // 编辑现有菜谱
        const index = recipes.findIndex(r => r.id === parseInt(editId));
        if (index !== -1) {
            recipes[index] = { ...recipes[index], ...recipeData };
        }
    } else {
        // 添加新菜谱
        recipeData.id = generateId();
        recipes.push(recipeData);
    }

    // 保存用户数据
    saveUserRecipes(getUserRecipes());

    closeModal();
    renderDishList();

    // 如果正在查看该菜谱，刷新显示
    if (currentRecipeId && (editId || currentRecipeId)) {
        showRecipe(editId ? parseInt(editId) : currentRecipeId);
    }
}

// 删除当前菜谱
function deleteCurrentRecipe() {
    if (!currentRecipeId || currentRecipeId <= 1000) return;
    deleteRecipeId = currentRecipeId;
    document.getElementById('deleteModal').classList.add('active');
}

// 关闭删除确认框
function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
    deleteRecipeId = null;
}

// 确认删除
function confirmDelete() {
    if (!deleteRecipeId) return;

    recipes = recipes.filter(r => r.id !== deleteRecipeId);
    saveUserRecipes(getUserRecipes());

    closeDeleteModal();
    goBack();
    renderDishList();
}

// 删除步骤图片
function deleteStepImage(stepIndex) {
    if (!currentRecipeId) return;

    const cacheKey = getStepImageKey(currentRecipeId, stepIndex);
    delete stepImageCache[cacheKey];
    // 保留提示词，方便重新生成时使用
    saveImageCache();

    // 刷新显示
    showRecipe(currentRecipeId);
}

// 打开编辑提示词模态框
function openPromptModal(stepIndex) {
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return;

    editingStepIndex = stepIndex;
    const step = recipe.steps[stepIndex];
    const cacheKey = getStepImageKey(currentRecipeId, stepIndex);
    const currentPrompt = stepPromptCache[cacheKey] || '';

    document.getElementById('promptStepText').textContent = `步骤 ${stepIndex + 1}: ${step}`;
    document.getElementById('promptInput').value = currentPrompt;

    document.getElementById('promptModal').classList.add('active');
}

// 关闭提示词模态框
function closePromptModal() {
    document.getElementById('promptModal').classList.remove('active');
    editingStepIndex = null;
}

// 使用自定义提示词重新生成图片
async function regenerateWithPrompt() {
    if (editingStepIndex === null || !currentRecipeId) return;

    const customPrompt = document.getElementById('promptInput').value.trim();

    if (!customPrompt) {
        alert('请输入图片提示词');
        return;
    }

    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return;

    const stepIndex = editingStepIndex;
    const step = recipe.steps[stepIndex];
    const cacheKey = getStepImageKey(currentRecipeId, stepIndex);

    // 关闭模态框
    closePromptModal();

    // 显示加载状态
    const placeholder = document.getElementById(`placeholder-${stepIndex}`);
    if (!placeholder) {
        // 如果没有占位符，先刷新显示以创建占位符
        showRecipe(currentRecipeId);
    }

    // 更新占位符显示生成中状态
    const updatedPlaceholder = document.getElementById(`placeholder-${stepIndex}`);
    if (updatedPlaceholder) {
        updatedPlaceholder.innerHTML = '<div class="loading-spinner"></div><span style="margin-left: 10px;">使用自定义提示词生成中...</span>';
        updatedPlaceholder.style.cursor = 'wait';
        updatedPlaceholder.style.flexDirection = 'row';
    }

    try {
        // 使用自定义提示词生成图片
        const imageUrl = await generateSingleImage(recipe.name, step, stepIndex, recipe.steps.length, customPrompt);
        stepImageCache[cacheKey] = imageUrl;
        saveImageCache();

        // 刷新显示
        showRecipe(currentRecipeId);

        console.log(`✅ 步骤${stepIndex + 1}使用自定义提示词重新生成成功！`);
    } catch (error) {
        console.error('重新生成失败:', error);

        // 恢复占位符为可点击重试
        const finalPlaceholder = document.getElementById(`placeholder-${stepIndex}`);
        if (finalPlaceholder) {
            finalPlaceholder.innerHTML = '🔄 点击重试';
            finalPlaceholder.style.cursor = 'pointer';
            finalPlaceholder.onclick = () => openPromptModal(stepIndex);
            finalPlaceholder.style.flexDirection = '';
        }
    }
}

// 初始化
console.log('初始化应用...');
loadImageCache();
loadRecipes();
console.log('菜谱加载完成，总数:', recipes.length);
renderCategoryNav();
renderDishList();
console.log('页面初始化完成');
